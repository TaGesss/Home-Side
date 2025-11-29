import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import CustomersSection from "@/components/customers-section"
import ContactSection from "@/components/contact-section"
import ProductsSection from "@/components/products-section"
import ContactBanner from "@/components/contact-banner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      {/* Small banner below products section */}
      <ContactBanner size="small" showButton={true} />
      <ServicesSection />
      <CustomersSection />
      <ContactSection />
    </>
  )
}
