import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"
import BackToSection from "@/components/back-to-section"

export default function TransportPage() {
  const features = [
    {
      title: "Reliable Fleet",
      description: "Modern fleet of trucks and transport vehicles for safe and timely delivery.",
    },
    {
      title: "Nationwide Coverage",
      description: "Comprehensive transport network covering all major cities and regions.",
    },
    {
      title: "Cargo Security",
      description: "Advanced security measures and tracking systems for cargo protection.",
    },
  ]

  const categories = [
    {
      title: "Freight Transport",
      description: "Heavy freight and cargo transportation services",
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
      title: "Container Transport",
      description: "Specialized container transportation and handling",
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
      title: "Machinery Transport",
      description: "Heavy machinery and equipment transportation",
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
      title: "Express Delivery",
      description: "Fast delivery services for urgent shipments",
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
        title="Transport Services"
        description="Reliable domestic and international transport solutions for all types of cargo with modern fleet and comprehensive tracking systems."
        ctaText="Get Transport Quote"
        ctaLink="/#contact"
        imageSrc="/images/import-hero.jpg"
      />
      <ServiceDetails
        title="Our Transport Solutions"
        description="Homeside Trading PLC provides comprehensive transport services with a modern fleet and experienced drivers. We ensure safe, timely, and cost-effective delivery of your goods across Ethiopia and beyond."
        features={features}
        categoryTitle="Transport Categories"
        categories={categories}
      />
      <ServiceCTA
        title="Need Transport Services?"
        description="Contact us today to discuss your transportation needs and get a reliable solution for your cargo delivery."
        ctaText="Contact Our Transport Team"
        ctaLink="/#contact"
      />
    </>
  )
}
