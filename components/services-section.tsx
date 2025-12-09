"use client";
import Link from "next/link";
import Image from "next/image";
import StarWatermark from "./star-watermark";
import { useState, useEffect } from "react";
import SeedWatermark from "./seed-watermark";
import SeedWatermarksClient from "./seed-watermarks-client";
interface SeedPosition {
  top: string;
  left: string;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
}
export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Import Services",
      description:
        "Specializing in machinery, vehicles, and spare parts import with efficient customs clearance.",
      image: "/images/import-service.jpg",
      link: "/services/import",
      subServices: [
        "Vehicles",
        "Machineries",
        "Spare Parts",
        "Construction Equipment",
        "Regulatory Equipment",
        "Jewelry/Decor",
      ],
    },
    {
      title: "Export Services",
      description:
        "Premium Ethiopian coffee and oil seeds exports with comprehensive documentation.",
      image: "/images/export-service.jpg",
      link: "/services/export",
      subServices: [
        "Ethiopian Coffee and Tea",
        "Oil Seeds",
        "Spices & Herbs",
        "Cereals & Pulses",
        "Other Agricultural Products",
      ],
    },
    {
      title: "Machinery Rental",
      description:
        "Wide range of construction equipment available for short and long-term rental.",
      image: "/images/machinery-rental.jpg",
      link: "/services/machinery-rent",
      subServices: [
        "Excavators",
        "Bulldozers",
        "Cranes (Mobile & Tower)",
        "Generators",
        "Loaders",
      ],
    },
    {
      title: "Transport Services",
      description:
        "Reliable domestic and international transport solutions for your goods.",
      image: "/images/import-service.jpg",
      link: "/services/transport",
      subServices: [
        "Dry Freight Transport",
        "Container Transport",
        "Heavy Machinery Transport",
        "Cement and Aggregate Transport",
        "Other transport services",
      ],
    },
    {
      title: "Customs Clearance and Transitor",
      description:
        "Expert handling of all customs procedures for smooth import/export operations.",
      image: "/images/customs-clearance.jpg",
      link: "/services/customs-clearance",
      subServices: [
        "Import Clearance and Transit",
        "Export Clearance and Transit",
        "Bonded Warehousing",
        "Customs storage",
        "Documentation",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Construction Materials",
      description: "Quality construction materials supply for your projects.",
      image: "/images/construction-materials.jpg",
      link: "/services/construction-materials",
      subServices: [
        "Cement & Concrete",
        "Steel Products",
        "Finishing Materials",
        "Roofing Materials",
        "Plumbing & Electrical",
        "Heating Equipment",
        "Other Construction Materials",
      ],
    },
  ];

  // Colors matching the star watermarks (primary and orange theme)
  const watermarkColors = [
    "text-primary-light",
    "text-primary",
    "text-orange-400",
    "text-orange-500",
  ];
  // seed watermarks are rendered client-side to avoid hydration issues

  return (
    <section
      id="services"
      className="relative py-20 bg-cream-50 overflow-hidden"
    >
      {/* Seed watermarks (client-only) */}
      <SeedWatermarksClient />

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onTouchStart={() =>
                setHoveredService(hoveredService === index ? null : index)
              }
            >
              {/* Main Content */}
              <div className="p-8">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={384}
                  height={192}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-light mb-6">{service.description}</p>

                {/* Full-width Learn More button */}
                <Link
                  href={service.link}
                  className="block w-full text-center bg-orange-400 text-white py-3 rounded-full hover:bg-orange-500 transition font-medium"
                >
                  Learn More →
                </Link>
              </div>

              {/* Sub-services overlay */}
              <div
                className={`absolute inset-0 bg-primary-hover bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
                  hoveredService === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">
                      {service.title}
                    </h4>
                    <p className="text-base text-primary-light mb-4">
                      Our specialized services include:
                    </p>
                    <ul className="space-y-2">
                      {service.subServices.map((subService, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center text-primary-light"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-base">{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full-width Learn More button in overlay */}
                  <Link
                    href={service.link}
                    className="block w-full text-center bg-primary text-white py-3 rounded-full hover:bg-orange-400 transition font-medium mt-4"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
