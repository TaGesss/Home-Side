import { NextResponse } from 'next/server'

function absolutify(url: string) {
  if (!url) return url
  if (url.startsWith('http')) return url
  if (url.startsWith('//')) return 'https:' + url
  return `https://iqfortune.com${url.startsWith('/') ? '' : '/'}${url}`
}

export async function GET() {
  try {
    const res = await fetch('https://iqfortune.com/products', { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const html = await res.text()

    const products: Array<{ title?: string; href?: string; img?: string; description?: string; price?: string }> = []

    // Try to find container blocks that include the word "product" in class
    const sectionRe = /<(?:div|article|li|section)[^>]*class=["'][^"'>]*product[^"'>]*["'][^>]*>([\s\S]*?)<\/(?:div|article|li|section)>/ig
    let m
    const seenHrefs = new Set()

    while ((m = sectionRe.exec(html)) !== null) {
      const block = m[1]
      const hrefMatch = block.match(/href=["']([^"']+)["']/i)
      const imgMatch = block.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
      const titleMatch = block.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/i) || block.match(/alt=["']([^"']+)["']/i)
      const descMatch = block.match(/<p[^>]*>([\s\S]{10,200})<\/p>/i)
      const priceMatch = block.match(/([$€£]\s?\d[\d,.]*)/)

      const href = hrefMatch ? absolutify(hrefMatch[1]) : undefined
      if (href && seenHrefs.has(href)) continue
      if (href) seenHrefs.add(href)

      products.push({
        title: titleMatch ? titleMatch[1].trim() : undefined,
        href,
        img: imgMatch ? absolutify(imgMatch[1]) : undefined,
        description: descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : undefined,
        price: priceMatch ? priceMatch[0] : undefined,
      })
    }

    // Fallback: find anchor links that include '/product' in href
    if (products.length === 0) {
      const anchorRe = /<a[^>]+href=["']([^"']*product[^"']*)["'][^>]*>([\s\S]*?)<\/a>/ig
      while ((m = anchorRe.exec(html)) !== null && products.length < 60) {
        const block = m[2]
        const href = absolutify(m[1])
        if (seenHrefs.has(href)) continue
        seenHrefs.add(href)
        const imgMatch = block.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
        const titleMatch = block.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/i) || block.match(/alt=["']([^"']+)["']/i) || block.match(/>([^<]{3,80})</)
        products.push({ title: titleMatch ? titleMatch[1].trim() : undefined, href, img: imgMatch ? absolutify(imgMatch[1]) : undefined })
      }
    }

    return NextResponse.json({ products })
  } catch (err) {
    return NextResponse.json({ products: [], error: String(err) }, { status: 500 })
  }
}
