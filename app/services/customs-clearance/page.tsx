import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"
import BackToSection from "@/components/back-to-section"

export default function CustomsClearancePage() {
  const features = [
    {
      title: "Document Preparation",
      description: "Accurate preparation of all required customs documentation.",
    },
    {
      title: "Duty Calculation",
      description: "Precise calculation of duties and taxes to avoid overpayment.",
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring full compliance with all import/export regulations.",
    },
  ]

  const categories = [
    {
      title: "Import Clearance",
      description: "Efficient processing of all import shipments",
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
      title: "Export Clearance",
      description: "Smooth processing for all export shipments",
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
      title: "Bonded Warehousing",
      description: "Temporary storage solutions for customs",
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
      title: "Duty Drawback",
      description: "Recovery of duties on re-exported goods",
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
        title="Customs Clearance"
        description="Our expert customs clearance services ensure smooth and efficient processing of your imports and exports, minimizing delays and avoiding unnecessary costs."
        ctaText="Get Customs Support"
        ctaLink="/#contact"
        imageSrc="/images/customs-hero.jpg"
      />
      <ServiceDetails
        title="Our Customs Services"
        description="Homeside Trading PLC provides comprehensive customs clearance services, handling all documentation and regulatory requirements for your imports and exports."
        features={features}
        categoryTitle="Clearance Services"
        categories={categories}
      />
      <ServiceCTA
        title="Need Customs Assistance?"
        description="Contact us today to ensure smooth customs clearance for your shipments."
        ctaText="Contact Our Customs Team"
        ctaLink="/#contact"
      />
    </>
  )
}
