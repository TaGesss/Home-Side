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
    <section className="relative flex items-center justify-center px-4 pt-12 pb-10 bg-gradient-to-r from-primary-hover to-cream-50 overflow-hidden">
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
          <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
            Your Trusted Partner in
            <span className="text-orange-400"> Global Trade</span>
          </h1>
          <p className="text-xl text-primary-light">
            Specializing in import, export, machinery rental, and transport
            services with many years of industry experience.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-orange-400 transition transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="#services"
              className="border-2 border-primary text-primary-light px-8 py-3 rounded-full hover:bg-primary-hover transition transform hover:scale"
            >
              Our Services
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
