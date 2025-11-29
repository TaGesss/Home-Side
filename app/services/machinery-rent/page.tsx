import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"
import BackToSection from "@/components/back-to-section"

export default function MachineryRentPage() {
  const features = [
    {
      title: "Wide Equipment Range",
      description: "Comprehensive fleet of construction and industrial machinery for all project needs.",
    },
    {
      title: "Flexible Rental Terms",
      description: "Short-term and long-term rental options to suit your project timeline.",
    },
    {
      title: "Maintenance Support",
      description: "Full maintenance and technical support included with all rentals.",
    },
  ]

  const categories = [
    {
      title: "Excavators",
      description: "Various sizes of excavators for construction projects",
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
      title: "Bulldozers",
      description: "Heavy-duty bulldozers for earthmoving operations",
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
      title: "Cranes",
      description: "Mobile and tower cranes for lifting operations",
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
      title: "Generators",
      description: "Power generators for construction sites",
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
        title="Machinery Rental"
        description="Rent high-quality construction and industrial machinery for your projects with flexible terms and comprehensive maintenance support."
        ctaText="Rent Equipment"
        ctaLink="/#contact"
        imageSrc="/images/machinery-hero.jpg"
      />
      <ServiceDetails
        title="Our Rental Fleet"
        description="Homeside Trading PLC offers a comprehensive fleet of construction and industrial machinery available for short-term and long-term rental. All equipment comes with full maintenance support and operator training if needed."
        features={features}
        categoryTitle="Equipment Categories"
        categories={categories}
      />
      <ServiceCTA
        title="Need Equipment for Your Project?"
        description="Contact us today to discuss your equipment rental needs and get a customized solution for your project."
        ctaText="Contact Our Rental Team"
        ctaLink="/#contact"
      />
    </>
  )
}
