import CustomerHero from "@/components/customer-hero";
import CustomerDetails from "@/components/customer-details";
import CustomerCTA from "@/components/customer-cta";
import BackToSection from "@/components/back-to-section";
import CustomerRotate from "@/components/customers-rotating";

export default function Customer5Page() {
  const features = [
    {
      title: "Equipment Expertise",
      description:
        "Specialized knowledge in agricultural equipment distribution and service provision.",
    },
    {
      title: "Service Network",
      description:
        "Extensive service network providing maintenance and support across multiple regions.",
    },
    {
      title: "Technology Innovation",
      description:
        "Focus on modern agricultural technology and precision farming equipment.",
    },
  ];

  const services = [
    {
      title: "Equipment Import",
      description: "Agricultural machinery and equipment import services",
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
      title: "Spare Parts Supply",
      description: "Comprehensive spare parts and components supply",
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
      title: "Technical Training",
      description: "Equipment operation and maintenance training",
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
      title: "Logistics Coordination",
      description: "Equipment transportation and delivery coordination",
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
        title="Customer 5"
        description="A premier agricultural equipment distributor and service provider, Customer 5 has been our valued partner for 3+ years, specializing in modern farming equipment and precision agriculture solutions."
        ctaText="Grow With Us"
        ctaLink="/#contact"
        imageSrc="/placeholder.svg?height=400&width=600"
      />
      <CustomerRotate />
      <CustomerCTA
        title="Modernize Your Agricultural Operations"
        description="Access the same level of agricultural equipment expertise and import services that has helped Customer 5 become a leader in agricultural technology distribution."
        ctaText="Explore Opportunities"
        ctaLink="/#contact"
      />
    </>
  );
}
