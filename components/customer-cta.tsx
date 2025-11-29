import Link from "next/link"

interface CustomerCTAProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export default function CustomerCTA({ title, description, ctaText, ctaLink }: CustomerCTAProps) {
  return (
    <section className="py-20 bg-primary-light text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-primary-hover mb-8 max-w-3xl mx-auto">{description}</p>
        <Link
          href={ctaLink}
          className="bg-orange-400 text-white px-8 py-4 rounded-full hover:bg-orange-500 transition inline-block font-medium"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
