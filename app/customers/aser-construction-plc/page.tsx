import CustomerHero from "@/components/customer-hero";
import CustomerDetails from "@/components/customer-details";
import CustomerCTA from "@/components/customer-cta";
import BackToSection from "@/components/back-to-section";
import CustomerRotate from "@/components/customers-rotating";

export default function Customer1Page() {
  const features = [
    {
      title: "Manufacturing Excellence",
      description:
        "Leading supplier of high-quality industrial products with ISO certification.",
    },
    {
      title: "Global Distribution",
      description:
        "Extensive distribution network covering major industrial markets worldwide.",
    },
    {
      title: "Innovation Focus",
      description:
        "Continuous investment in R&D to develop cutting-edge manufacturing solutions.",
    },
  ];

  const services = [
    {
      title: "Industrial Equipment",
      description: "Heavy machinery and industrial equipment supply",
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
      title: "Manufacturing Tools",
      description: "Precision tools and manufacturing equipment",
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
      title: "Quality Control",
      description: "Advanced quality control and testing systems",
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
      title: "Technical Support",
      description: "Comprehensive technical support and maintenance",
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
        title="Customer 1"
        description="A leading supplier of industrial products and manufacturing solutions, Customer 1 has been our trusted partner for over 5 years, driving innovation and excellence in the manufacturing sector."
        ctaText="Partner With Us"
        ctaLink="/#contact"
        imageSrc="/placeholder.svg?height=400&width=600"
      />
      <CustomerRotate />
      <CustomerCTA
        title="Ready to Build a Partnership Like This?"
        description="Join our network of successful partners and experience the same level of service and support that has made Customer 1 a leader in their industry."
        ctaText="Start Your Partnership"
        ctaLink="/#contact"
      />
    </>
  );
}
