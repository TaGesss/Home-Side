import Link from "next/link";
import Image from "next/image";
import SeedWatermark from "./seed-watermark";
import "../styles/globals.css";
import CoffeeBeanWaterMark from "./coffee-bean-watermark";

export default function HeroSection() {
  const watermarkColors = [
    "text-primary",
    "text-primary-light",
    "text-orange-400",
    "text-orange-500",
  ];

  // Generate positions for seed watermarks - same quantity and size as sunflower watermarks
  const seedPositions = Array.from({ length: 50 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 16 + Math.random() * 20, // 16px to 36px (same as sunflowers)
    opacity: 0.08 + Math.random() * 0.07, // 0.08 to 0.15 opacity
    color: watermarkColors[Math.floor(Math.random() * watermarkColors.length)],
    rotation: Math.random() * 360, // Random rotation for variety
  }));
  return (
    <section className="relative flex items-center justify-center px-4 pt-20 pb-20 min-h-[80vh] bg-gradient-to-r from-primary-hover to-cream-50 overflow-hidden">
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
            transform: `rotate(${pos.rotation}deg)`,
          }}
        >
          <div className="absolute top-1/2 left-3/4 w-16 h-16">
            <CoffeeBeanWaterMark size={64} className={`w-6 h-6 opacity-80`} />
          </div>
        </div>
      ))}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold  leading-tight text-orange-600">
            Unlock Global Opportunities
          </h1>
          <p className="text-xl text-primary-light">
            Experience, reliability, speed, and excellence in every transaction. Partner with us to grow your business worldwide.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/products/import"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Import
            </Link>
            <Link
              href="/products/export"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Export
            </Link>
            <Link
              href="/services/machinery-rent"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Machinery Rental
            </Link>
            <Link
              href="/services/transport"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Transport
            </Link>
            <Link
              href="/services/customs-clearance"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Custom Clearance
            </Link>
            <Link
              href="/services/construction-materials"
              className="bg-primary/80 text-white px-7 py-3 rounded-full hover:bg-orange-400 hover:text-white transition font-semibold shadow-lg"
            >
              Construction Materials
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/hero-image.jpg"
            alt="Warehouse"
            width={576}
            height={384}
            className="morph w-full h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
