"use client"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { exportProducts, importProducts } from "@/lib/products"
import SeedWatermarksClient from "./seed-watermarks-client"

export default function ProductsSection() {
  const sectionData = {
    Export: exportProducts,
    Import: importProducts,
  };

  // Maintain refs and scroll state per section
  const containerRefs = {
    Export: useRef<HTMLDivElement | null>(null),
    Import: useRef<HTMLDivElement | null>(null),
  };
  const [scrollProgress, setScrollProgress] = useState({ Export: 0, Import: 0 });

  const scrollByCards = (section: "Export" | "Import", direction: "left" | "right", count = 4) => {
    const el = containerRefs[section].current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".product-card");
    const cardWidth = card ? card.offsetWidth + parseInt(getComputedStyle(card).marginRight || "0") : 300;
    const offset = direction === "left" ? -cardWidth * count : cardWidth * count;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleScroll = (section: "Export" | "Import") => {
    const el = containerRefs[section].current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress((prev) => ({ ...prev, [section]: progress }));
  };

  const learnMoreButtonStyle =
    "px-8 py-3 text-lg rounded-full font-semibold shadow transition-all bg-primary hover:bg-orange-300 text-white"

  return (
    <section
      id="products"
      className="relative py-10 overflow-hidden bg-gradient-to-r from-primary-hover to-cream-50"
    >
      <SeedWatermarksClient />

      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
        Products
      </h2>

      {["Export", "Import"].map((section) => (
        <div key={section} className="mb-12 px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-2">
            {section}
          </h3>
          <p className="text-primary-light text-center mb-4 md:mb-6 text-sm md:text-base">
            {section === "Export"
              ? "Explore export-ready products that meet international quality standards."
              : "Import machinery, vehicles, and spare parts with fast customs clearance."}
          </p>

          {/* Card display area with border */}
          <div className="relative rounded-3xl border-2 border-gray-300 p-3">
            {/* Left Scroll Button */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
              <button
                aria-label="Scroll left"
                onClick={() => scrollByCards(section as "Export" | "Import", "left")}
                className="p-3 rounded-full shadow-lg bg-white hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 15.707a1 1 0 01-1.414 0L5.586 10.414a1 1 0 010-1.414L10.879 3.707a1 1 0 011.414 1.414L8.414 10l5.293 5.293a1 1 0 010 1.414z" />
                </svg>
              </button>
            </div>

            {/* Cards */}
            <div
              ref={containerRefs[section as "Export" | "Import"]}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-3 md:py-4"
              onScroll={() => handleScroll(section as "Export" | "Import")}
            >
              {sectionData[section as "Export" | "Import"].map((p, i) => (
                <div
                  key={p.title + "-" + section + "-" + i}
                  className="product-card flex-shrink-0 w-[75%] sm:w-[45%] md:w-1/4 bg-white/30 backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300 snap-start p-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-200 shadow-sm mb-3">
                      <Image
                        src={p.img || "/images/placeholder.jpg"}
                        alt={p.title}
                        width={192}
                        height={192}
                        className="w-44 h-44 object-cover rounded-xl"
                      />
                    </div>
                    <p className="font-semibold text-base md:text-lg text-primary text-center">
                      {p.title}
                    </p>
                    {p.description && (
                      <p className="text-xs md:text-sm text-primary-light text-center mt-1">
                        {p.description}
                      </p>
                    )}

                    {/* Action Button: Export = Sample Request, Import = Check Availability */}
                    {section === "Export" ? (
                      <Link href={`/request-info?type=sample&product=${encodeURIComponent(p.title)}`} className="mt-3 block w-full text-center bg-orange-400 text-white py-2 rounded-full hover:bg-orange-500 transition font-medium">
                        Sample Request
                      </Link>
                    ) : (
                      <Link href={`/request-info?type=availability&product=${encodeURIComponent(p.title)}`} className="mt-3 block w-full text-center bg-orange-400 text-white py-2 rounded-full hover:bg-orange-500 transition font-medium">
                        Check Availability
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
              <button
                aria-label="Scroll right"
                onClick={() => scrollByCards(section as "Export" | "Import", "right")}
                className="p-3 rounded-full shadow-lg bg-white hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.707 4.293a1 1 0 010 1.414L3.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="h-1 bg-gray-200 rounded-full mt-2">
            <div
              className="h-1 bg-primary rounded-full"
              style={{ width: `${scrollProgress[section as "Export" | "Import"]}%` }}
            />
          </div>

          {/* Learn More Button */}
          <div className="mt-4 flex justify-center">
            <Link
              href={`/products/${section.toLowerCase()}`}
              className="px-8 py-3 text-lg rounded-full font-semibold shadow transition-all bg-primary hover:bg-orange-300 text-white"
            >
              View More producs
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
