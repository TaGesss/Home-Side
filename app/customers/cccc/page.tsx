import CustomerHero from "@/components/customer-hero";
import CustomerDetails from "@/components/customer-details";
import CustomerCTA from "@/components/customer-cta";
import BackToSection from "@/components/back-to-section";
import CustomerRotate from "@/components/customers-rotating";

export default function Customer3Page() {
  const features = [
    {
      title: "Agricultural Expertise",
      description:
        "Deep knowledge of agricultural commodities and international trading standards.",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring premium product standards.",
    },
    {
      title: "Market Intelligence",
      description:
        "Advanced market analysis and trading strategies for optimal results.",
    },
  ];

  const services = [
    {
      title: "Commodity Trading",
      description: "International trading of agricultural commodities",
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
      title: "Export Services",
      description: "Premium coffee and oil seeds export operations",
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
      title: "Quality Testing",
      description: "Comprehensive quality testing and certification",
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
      title: "Market Analysis",
      description: "Strategic market research and trading insights",
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
      <BackToSection href="/#customers" text="Back to Our Valued Customers" />
      <CustomerHero
        title="Customer 3"
        description="An international trader of commodities and agricultural products, Customer 3 has been our valued partner for 4+ years, specializing in premium Ethiopian coffee and oil seeds export to global markets."
        ctaText="Join Our Network"
        ctaLink="/#contact"
        imageSrc="/placeholder.svg?height=400&width=600"
      />
      <CustomerRotate />
      <CustomerCTA
        title="Expand Your Agricultural Trading"
        description="Leverage our expertise in agricultural commodity trading and export services to reach new markets and maximize your trading potential."
        ctaText="Start Trading With Us"
        ctaLink="/#contact"
      />
    </>
  );
}
