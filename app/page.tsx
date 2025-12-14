import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import CustomersSection from "@/components/customers-section"
import ContactSection from "@/components/contact-section"
import ProductsSection from "@/components/products-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import ContactBanner from "@/components/contact-banner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <CustomersSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  )
}
