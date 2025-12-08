"use client"
import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { products as copiedProducts } from "@/lib/products"
import SeedWatermarksClient from "./seed-watermarks-client"

export default function ProductsSection() {
  const items = copiedProducts
  const containerRef = useRef<HTMLDivElement | null>(null)
  const autoRef = useRef<number | null>(null) // will hold RAF id
  const lastTsRef = useRef<number | null>(null)
  const idleTimerRef = useRef<number | null>(null)
  const resumeTimerRef = useRef<number | null>(null)

  function scrollByOffset(offset: number) {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: offset, behavior: 'smooth' })
  }

  function startAutoScroll() {
    stopAutoScroll()
    lastTsRef.current = null

    const step = (ts: number) => {
      const el = containerRef.current
      if (!el) return
      if (lastTsRef.current == null) lastTsRef.current = ts
      const delta = ts - lastTsRef.current
      lastTsRef.current = ts

      // speed in pixels per second (slow)
      const speed = 6 // px/s (reduced for very slow rotation)
      const increment = (speed * delta) / 1000

      // perform scroll
      el.scrollLeft += increment

      // seamless loop: when we've scrolled past half (we render duplicated items), jump back by half width
      const half = el.scrollWidth / 2
      if (el.scrollLeft >= half) {
        el.scrollLeft = el.scrollLeft - half
      }

      autoRef.current = window.requestAnimationFrame(step)
    }

    autoRef.current = window.requestAnimationFrame(step)
  }

  function stopAutoScroll() {
    if (autoRef.current) {
      window.cancelAnimationFrame(autoRef.current)
      autoRef.current = null
    }
    lastTsRef.current = null
  }

  // Smoothly scroll by an offset (uses element's first child width as fallback)
  function scrollByCardOffset(direction: 'left' | 'right') {
    const el = containerRef.current
    if (!el) return

    // stop auto while user triggers manual scroll
    stopAutoScroll()
    clearResumeTimer()

    // determine card width (first element)
    const first = el.querySelector<HTMLElement>('.snap-start')
    const cardWidth = first ? first.offsetWidth + parseInt(getComputedStyle(first).marginRight || '0') : 320
    const offset = direction === 'left' ? -cardWidth : cardWidth

    el.scrollBy({ left: offset, behavior: 'smooth' })

    // schedule resume after idle (2s)
    resumeTimerRef.current = window.setTimeout(() => {
      startAutoScroll()
    }, 2000)
  }

  function clearIdleTimer() {
    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current)
      idleTimerRef.current = null
    }
  }

  function clearResumeTimer() {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  useEffect(() => {
    // start auto-scroll after a short idle delay (2s)
    clearIdleTimer()
    idleTimerRef.current = window.setTimeout(() => {
      startAutoScroll()
    }, 2000)

    const el = containerRef.current
    function onUserInteract() {
      // stop scrolling and schedule resume after idle
      stopAutoScroll()
      clearIdleTimer()
      clearResumeTimer()
      resumeTimerRef.current = window.setTimeout(() => {
        startAutoScroll()
      }, 2000)
    }

    if (el) {
      el.addEventListener('pointerdown', onUserInteract)
      el.addEventListener('touchstart', onUserInteract)
      el.addEventListener('wheel', onUserInteract, { passive: true })
    }

    return () => {
      // cleanup
      clearIdleTimer()
      clearResumeTimer()
      stopAutoScroll()
      if (el) {
        el.removeEventListener('pointerdown', onUserInteract)
        el.removeEventListener('touchstart', onUserInteract)
        el.removeEventListener('wheel', onUserInteract)
      }
    }
  }, [])

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-gradient-to-r from-primary-hover to-cream-50">
      <SeedWatermarksClient />

      <div className="w-full relative z-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Products</h2>

        {/* Export Banner */}
        <div className="w-full mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-none p-2 md:p-3 text-center w-full">
            <h3 className="text-2xl md:text-3xl font-semibold">Export</h3>
            <p className="mt-2 text-sm md:text-base opacity-90">Explore products available for export — quality-checked and ready for international shipping.</p>
          </div>
        </div>

        {/* Export Products Cards - auto-rotating, larger, full width */}
        <div className="relative w-full">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <button aria-label="Scroll left" onClick={() => scrollByCardOffset('left')} className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 15.707a1 1 0 01-1.414 0L5.586 10.414a1 1 0 010-1.414L10.879 3.707a1 1 0 011.414 1.414L8.414 9.999l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd"/></svg>
            </button>
          </div>

          <div
            ref={containerRef}
            onMouseEnter={() => stopAutoScroll()}
            onMouseLeave={() => startAutoScroll()}
            className="overflow-x-auto snap-x snap-mandatory flex gap-8 py-6 px-4 w-full"
            style={{scrollBehavior: 'smooth'}}
          >
            {[...items, ...items].map((p, i) => (
              <div key={p.title + '-' + i} className="snap-start flex-shrink-0 w-96 md:w-[28rem] bg-white rounded-3xl border border-gray-200 shadow-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white flex items-center justify-center border-2">
                    <img src={p.img} alt={p.title} className="w-28 h-28 object-cover rounded-2xl" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-primary">{p.title}</p>
                    <p className="text-sm text-primary-light mt-2">{p.description}</p>
                  </div>
                  <Link href="/request-info?type=sample&product=" className="mt-4 block w-full text-center bg-orange-400 text-white py-2 rounded-full hover:bg-orange-500 transition font-medium">
                    Request Sample
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <button aria-label="Scroll right" onClick={() => { scrollByCardOffset('right'); }} className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L3.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>

        {/* Import Banner */}
        <div className="w-full mt-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-none p-2 md:p-3 text-center w-full">
            <h3 className="text-2xl md:text-3xl font-semibold">Import</h3>
            <p className="mt-2 text-sm md:text-base opacity-90">Specializing in machinery, vehicles, and spare parts import with efficient customs clearance.</p>
          </div>
        </div>

        {/* Import Products Cards - same as export */}
        <div className="relative w-full mt-8">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <button aria-label="Scroll left" onClick={() => scrollByCardOffset('left')} className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 15.707a1 1 0 01-1.414 0L5.586 10.414a1 1 0 010-1.414L10.879 3.707a1 1 0 011.414 1.414L8.414 9.999l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd"/></svg>
            </button>
          </div>

          <div
            className="overflow-x-auto snap-x snap-mandatory flex gap-8 py-6 px-4 w-full"
            style={{scrollBehavior: 'smooth'}}
          >
            {[...items, ...items].map((p, i) => (
              <div key={p.title + '-import-' + i} className="snap-start flex-shrink-0 w-96 md:w-[28rem] bg-white rounded-3xl border border-gray-200 shadow-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white flex items-center justify-center border-2">
                    <img src={p.img} alt={p.title} className="w-28 h-28 object-cover rounded-2xl" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-primary">{p.title}</p>
                    <p className="text-sm text-primary-light mt-2">{p.description}</p>
                  </div>
                  <Link href="/request-info?type=sample&product=" className="mt-4 block w-full text-center bg-orange-400 text-white py-2 rounded-full hover:bg-orange-500 transition font-medium">
                    Request Sample
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <button aria-label="Scroll right" onClick={() => { scrollByCardOffset('right'); }} className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L3.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
