import ServiceHero from "@/components/service-hero";
import ServiceDetails from "@/components/service-details";
import ServiceCTA from "@/components/service-cta";
import BackToSection from "@/components/back-to-section";

export default function ImportPage() {
  const features = [
    {
      title: "Global Sourcing",
      description:
        "We identify and source quality products from reliable suppliers worldwide.",
    },
    {
      title: "Customs Clearance",
      description:
        "Expert handling of all customs procedures and documentation.",
    },
    {
      title: "Logistics Management",
      description:
        "End-to-end logistics solutions including shipping and inland transportation.",
    },
  ];

  const categories = [
    {
      title: "Machinery",
      description:
        "Industrial and construction machinery for various applications",
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
      title: "Vehicles & Spare Parts",
      description: "Cars, trucks, and automotive components for various needs",
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
      title: "Construction Equipments",
      description:
        "Heavy-duty equipment for construction and infrastructure projects",
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
      title: "jewelry/Decor",
      description: "Fine jewelry and decorative items",
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
  ];

  return (
    <>
      <BackToSection href="/#services" text="Back to Services" />
      <ServiceHero
        title="Import Services"
        description="We specialize in importing high-quality machinery, vehicles, and spare parts with efficient customs clearance and logistics support."
        ctaText="Request a Quote"
        ctaLink="/#contact"
        imageSrc="/images/import-hero.jpg"
      />
      <ServiceDetails
        title="Our Import Solutions"
        description="With over a decade of experience in international trade, Homeside Trading PLC provides comprehensive import services tailored to your business needs. We handle the entire process from sourcing to delivery."
        features={features}
        categoryTitle="Import Categories"
        categories={categories}
      />
      <ServiceCTA
        title="Need Import Services?"
        description="Contact us today to discuss your import requirements and get a customized solution."
        ctaText="Contact Our Import Team"
        ctaLink="/#contact"
      />
    </>
  );
}
