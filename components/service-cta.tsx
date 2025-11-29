import Link from "next/link"

interface ServiceCTAProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export default function ServiceCTA({ title, description, ctaText, ctaLink }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-primary-light text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-primary-hover mb-8 max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={ctaLink}
            className="bg-orange-400 text-white px-8 py-4 rounded-full hover:bg-orange-500 transition inline-block font-medium"
          >
            {ctaText}
          </Link>
          <Link
            href="/#services"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition inline-block font-medium"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  )
}
