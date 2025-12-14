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
  title: {
    default: "Home Side Trading PLC | Export & Import Company in Ethiopia",
    template: "%s | Home Side Trading PLC",
  },
  description:
    "Home Side Trading PLC is a leading Ethiopian export and import company specializing in coffee, oilseeds, pulses, livestock, vehicles, and industrial equipment.",
  keywords: [
    "Home Side",
    "HomeSide",
    "Home Side Trading",
    "Home Side Trading PLC",
    "HomeSide Trading PLC",
    "Trading Company in Ethiopia",
    "HomeSidetrading",
    "Export Company in Ethiopia",
    "Import Company in Ethiopia",
    "Export Ethiopia",
    "Import Ethiopia",
  ],
  metadataBase: new URL("https://homesidetrading.com"),
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
        <ContactBannerGuard size="large" showButton={true} showTopMargin={false} />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />

        {/* Enhanced Organization Schema for SEO */}
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Company",
            name: "Home Side Trading PLC",
            alternateName: ["HomeSide", "Home Side", "HomeSide Trading"],
            url: "https://homesidetrading.com",
            logo: "https://homesidetrading.com/logo.png", // Replace with your actual logo URL
            description:
              "Export and import company in Ethiopia specializing in coffee, oilseeds, pulses, livestock, vehicles, and industrial equipment.",
            areaServed: ["ET", "Global"],
            industry: "Import-Export, Trading",
            
            keywords:
              "Export Ethiopia, Import Ethiopia, Trading Company in Ethiopia, Ethiopian Exporter",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+251911208341", // Replace with your phone
                contactType: "customer service",
                email: "info@homesidetrading.com", // Replace with your email
                areaServed: ["ET","Global"],
                availableLanguage: ["English", "Amharic"]
              }
            ],
            sameAs: [
              "https://www.facebook.com/HomeSideTrading",
              "https://www.linkedin.com/company/homeside-trading",
              "https://www.instagram.com/HomeSideTrading"
            ]
          })}
        </Script>

        {/* EmailJS Script */}
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
