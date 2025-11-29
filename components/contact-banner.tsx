"use client"

import Link from "next/link"

type ContactBannerProps = {
  size?: "large" | "small"
  showButton?: boolean
}

export default function ContactBanner({ size = "large", showButton = true }: ContactBannerProps) {
  // Match navbar height: small vertical padding so banner height equals nav
  const paddingY = "py-3"
  const mt = "mt-0"
  const titleClass = "text-lg md:text-xl font-semibold"
  const subtitleClass = "text-sm mt-0"

  // Gradient similar to attachment (blue -> purple)
  const gradient = "linear-gradient(90deg,#2b6cb0 0%,#6b46c1 100%)"

  return (
    <div className={`w-full ${mt} ${paddingY}`} style={{ background: gradient }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex-1 text-left text-white">
          <h3 className={`${titleClass} whitespace-normal leading-snug`}>Request a Sample for export products</h3>
        </div>

        {showButton && (
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link href="/sample-contact" className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 ${size === 'large' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'} bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition`}> 
              <span>Request Sample</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
