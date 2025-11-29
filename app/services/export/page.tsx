import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"
import BackToSection from "@/components/back-to-section"

export default function ExportPage() {
  const features = [
    {
      title: "Quality Assurance",
      description: "We ensure all exported products meet international quality standards.",
    },
    {
      title: "Documentation",
      description: "Comprehensive handling of all export documentation and certifications.",
    },
    {
      title: "Global Distribution",
      description: "Reliable logistics network to deliver your products worldwide.",
    },
  ]

  const categories = [
    {
      title: "Ethiopian Coffee",
      description: "Premium Arabica and specialty coffee beans",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Oil Seeds",
      description: "Sesame, Niger seed, and other oil crops",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Spices",
      description: "High-quality Ethiopian spices and herbs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Agricultural Products",
      description: "Various agricultural commodities for export",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      <BackToSection href="/#services" text="Back to Services" />
      <ServiceHero
        title="Export Services"
        description="We specialize in exporting premium Ethiopian agricultural products including coffee, oil seeds, and spices to international markets with full quality assurance and documentation support."
        ctaText="Start Exporting"
        ctaLink="/#contact"
        imageSrc="/images/export-hero.jpg"
      />
      <ServiceDetails
        title="Our Export Solutions"
        description="Homeside Trading PLC facilitates the export of high-quality Ethiopian agricultural products to global markets. We ensure compliance with international standards and provide comprehensive documentation and logistics support."
        features={features}
        categoryTitle="Export Categories"
        categories={categories}
      />
      <ServiceCTA
        title="Ready to Export Your Products?"
        description="Contact us today to discuss your export requirements and access international markets with confidence."
        ctaText="Contact Our Export Team"
        ctaLink="/#contact"
      />
    </>
  )
}
