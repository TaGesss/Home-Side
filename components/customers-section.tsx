"use client";
import Link from "next/link";
import Image from "next/image";
import SunflowerWatermark from "./sunflower-watermark";
import { useState, useEffect } from "react";
interface SeedPosition {
  top: string;
  left: string;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
}
export default function CustomersSection() {
  const [hoveredCustomer, setHoveredCustomer] = useState<number | null>(null);

  const customers = [
    {
      name: "Aser Construction PLC",
      description: "A dynamic Grade One General Contractor",
      image: "/images/aser-image.jpg",
      category: "Transport Services",
      categoryDescription: "",
      similarCustomers: [
        "Dugda Construction PLC",
        "DMC Real Estate",
        "Bamacon Construction PLC",
        "Century Real Estate",
        "CCCC",
        "CCECC",
        "CGCOC",
        "Global Green Gross Institute (GGGI)",
      ],
    },
    {
      name: "Ethiopian Electricity Power",
      description: "State-owned electric utility company",
      image: "/images/Ethiopia Electricity Power.jpg",
      category: "Machinery Rental",
      categoryDescription: "",
      similarCustomers: [
        "Ethiopia Defence Construction and Equipments",
        "Amhara Water Works Construction Enterprise",
        "Aser Construction PLC",
        "Rama Construction PLC",
        "Century Real State",
        "jiangxi",
        "Deriba Defersha General Trading",
      ],
    },
    {
      name: "CCCC",
      description: "China Communications Construction Company Ltd.",
      image: "/images/cccc-image.jpg",
      category: "International Companies we served",
      categoryDescription: "",
      similarCustomers: [
        "China Civil Engineering Construction Corporation",
        "CGC Overseas Construction ETH.LTD",
        "CGCOC Group Co., Ltd.",
        "jiangxi",
      ],
    },
    {
      name: "Habesha Steel Mills PLC",
      description: "A quality producer of the full range of reinforcement bars",
      image: "/images/Habesha Steel PLC.png",
      category: "Customs clearance and transit services",
      categoryDescription:
        "Major construction companies and building contractors",
      similarCustomers: [
        "Ferranti Trading PLC",
        "Apex Trading PLC",
        "Wefam Trading PLC",
        "Altabe PLC",
        "Grace General Trading PLC",
        "Dallol Consulting PLC",
        "Zoom Trading PLC",
        "Bamak Foam And Plastics Manufacturing",
      ],
    },
    {
      name: "DHAMIA TRADING COMPANY",
      description: "Global Pulses Supplier",
      image: "/images/DHAMIA TRADING COMPANY.png",
      category: "Export",
      categoryDescription: "",
      similarCustomers: ["KIVI LLC Russia", "pargan singapore pte ltd"],
    },
    {
      name: "CCECC Ethiopia Construction Co., Ltd.",
      description:
        "Ethiopian branch of the China Civil Engineering Construction Corporation (CCECC)",
      image: "/images/CCECC.JPEG",
      category: "Construction materials and equipment",
      categoryDescription: "",
      similarCustomers: [
        "Wessen Ayal Construction PLC",
        "Arada Luxury Mall",
        "Cornerstone Development Group PLC",
        "Madcon Construction PLC",
        "DMC Real Estate",
      ],
    },
    {
      name: "Sinotruk International",
      description: "Leading manufacturer of heavy-duty trucks and equipment",
      image: "/images/sinotruk.png",
      category: "Import from Various Companies",
      categoryDescription: "",
      similarCustomers: [
        "DINGEMANSE Trucks and Trailers",
        "HAS Trailer SAN.VE TIC.LTD.STL",
      ],
    },
  ];

  // Colors matching the star watermarks (green and orange theme)
  const watermarkColors = [
    "text-primary",
    "text-primary-light",
    "text-orange-400",
    "text-orange-500",
  ];

  // Generate positions for larger sunflowers
  const [seedPositions, setSeedPositions] = useState<SeedPosition[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 16 + Math.random() * 20,
      opacity: 0.08 + Math.random() * 0.07,
      color:
        watermarkColors[Math.floor(Math.random() * watermarkColors.length)],
      rotation: Math.random() * 360,
    }));
    setSeedPositions(positions);
  }, []);

  return (
    <section id="customers" className="py-20 bg-white relative overflow-hidden">
      {/* Many larger sunflower watermarks */}
      {seedPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            opacity: pos.opacity,
          }}
        >
          <SunflowerWatermark className={`w-full h-full ${pos.color}`} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Our Valued Customers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              onMouseEnter={() => setHoveredCustomer(index)}
              onMouseLeave={() => setHoveredCustomer(null)}
              onTouchStart={() =>
                setHoveredCustomer(hoveredCustomer === index ? null : index)
              }
            >
              {/* Main Content */}
              <div className="flex flex-col h-full">
                {/* Full-width image at the top */}
                <div className="w-full h-40 relative">
                  <Image
                    src={customer.image || "/placeholder.svg"}
                    alt={customer.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content below image */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {customer.name}
                  </h3>
                  <p className="text-primary-light text-sm mb-4 flex-1">
                    {customer.description}
                  </p>

                  {/* Full-width Learn More button */}
                  {/*<Link
                    href={`/customers/${customer.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block w-full text-center bg-orange-400 text-white py-3 rounded-full hover:bg-orange-500 transition font-medium text-sm"
                  >
                    Learn More →
                  </Link>*/}
                </div>
              </div>

              {/* Similar customers overlay */}
              <div
                className={`absolute inset-0 bg-primary-hover bg-opacity-95 backdrop-blur-sm transition-all duration-500 ${
                  hoveredCustomer === index
                    ? "opacity-100 pointer-events-auto z-40"
                    : "opacity-0 pointer-events-none z-0"
                }`}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-primary mb-2">
                      {customer.category}
                    </h4>
                    {customer.categoryDescription && (
                      <p className="text-xs text-primary-light mb-3">
                        {customer.categoryDescription}
                      </p>
                    )}
                    <p className="text-sm text-primary-light mb-3 font-medium">
                      Similar customers we serve:
                    </p>
                    <ul className="space-y-1">
                      {customer.similarCustomers.map(
                        (similarCustomer, similarIndex) => (
                          <li
                            key={similarIndex}
                            className="flex items-center text-primary-light"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-xs leading-tight">
                              {similarCustomer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Full-width Learn More button in overlay */}
                  {/* <Link
                    //href={`/customers/${customer.name
                    //  .toLowerCase()
                    //  .replace(/\s+/g, "-")}`}
                   // className="block w-full text-center bg-primary text-white py-3 rounded-full hover:bg-orange-400 transition font-medium mt-4 flex-shrink-0 text-sm"
                  >
                   // Learn More →
                  </Link>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
