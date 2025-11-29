import Link from "next/link"
import Image from "next/image"

interface CustomerHeroProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageSrc: string
}

export default function CustomerHero({ title, description, ctaText, ctaLink, imageSrc }: CustomerHeroProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h1>
            <p className="text-lg text-primary-light mb-8">{description}</p>
            <Link
              href={ctaLink}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-orange-400 transition inline-block"
            >
              {ctaText}
            </Link>
          </div>
          <div className="relative">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="w-full rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-400 w-24 h-24 rounded-2xl z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
