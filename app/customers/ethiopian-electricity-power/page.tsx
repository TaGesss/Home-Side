import CustomerHero from "@/components/customer-hero";
import CustomerDetails from "@/components/customer-details";
import CustomerCTA from "@/components/customer-cta";
import BackToSection from "@/components/back-to-section";
import CustomerRotate from "@/components/customers-rotating";

export default function Customer2Page() {
  const features = [
    {
      title: "Logistics Excellence",
      description:
        "Comprehensive freight forwarding and logistics solutions across multiple continents.",
    },
    {
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain optimization and management services.",
    },
    {
      title: "Technology Integration",
      description:
        "Advanced tracking and management systems for real-time logistics monitoring.",
    },
  ];

  const services = [
    {
      title: "Freight Forwarding",
      description: "International freight forwarding and shipping",
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
      title: "Warehousing",
      description: "Strategic warehousing and distribution centers",
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
      title: "Customs Brokerage",
      description: "Expert customs clearance and documentation",
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
      title: "Supply Chain Consulting",
      description: "Strategic supply chain optimization services",
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
        title="Customer 2"
        description="A trusted partner in logistics and freight forwarding services, Customer 2 has been working with us for over 7 years, providing comprehensive supply chain solutions across global markets."
        ctaText="Explore Partnership"
        ctaLink="/#contact"
        imageSrc="/images/construction-hero.jpg"
      />
      <CustomerRotate />
      <CustomerCTA
        title="Transform Your Logistics Operations"
        description="Experience the same level of logistics excellence and supply chain optimization that has made Customer 2 a leader in the freight forwarding industry."
        ctaText="Get Started Today"
        ctaLink="/#contact"
      />
    </>
  );
}
