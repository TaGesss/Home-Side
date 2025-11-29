"use client"

import { usePathname } from "next/navigation"
import ContactBanner from "@/components/contact-banner"

type ContactBannerProps = {
  size?: "large" | "small"
  showButton?: boolean
  showTopMargin?: boolean
}

export default function ContactBannerGuard(props: ContactBannerProps) {
  const pathname = usePathname()

  // Hide the banner on the sample contact page
  if (!pathname) return null
  if (pathname === "/sample-contact" || pathname.startsWith("/sample-contact")) return null

  // If used in layout we prefer to disable the top margin so it sits flush under the navbar
  return <ContactBanner {...props} />
}
