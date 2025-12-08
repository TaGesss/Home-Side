import React from "react";

const cards = [
  {
    title: "Expertise",
    description: "Years of experience in global trade and logistics ensure reliable service.",
    icon: "🌍",
  },
  {
    title: "Quality Assurance",
    description: "Strict quality control and product selection for every shipment.",
    icon: "✅",
  },
  {
    title: "Customer Focus",
    description: "Personalized solutions and dedicated support for every client.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description: "Modern technology and processes for efficient operations.",
    icon: "💡",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-primary-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
              <p className="text-primary-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
