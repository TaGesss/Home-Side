import "../styles/globals.css"
import type React from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ContactBannerGuard from "@/components/contact-banner-guard"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Homeside Trading PLC",
  description: "Your trusted partner in international trade and logistics services",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-cream-50 font-sans antialiased pt-16`}>
        <Navbar />
        {/* Contact banner directly under navbar for site-wide visibility */}
        <ContactBannerGuard size="large" showButton={true} showTopMargin={false} />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />

        {/* EmailJS Script */}
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
