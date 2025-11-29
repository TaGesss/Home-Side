import Link from "next/link"

interface BackToSectionProps {
  href: string
  text: string
}

export default function BackToSection({ href, text }: BackToSectionProps) {
  return (
    <div className="py-6 px-4 mt-20 bg-primary-hover border-b border-primary-hover">
      <div className="max-w-6xl mx-auto">
        <Link
          href={href}
          className="inline-flex items-center text-primary-light hover:text-orange-400 transition-all-300 font-medium text-lg group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {text}
        </Link>
      </div>
    </div>
  )
}
