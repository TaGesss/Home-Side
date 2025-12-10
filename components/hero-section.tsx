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

  const seedPositions = Array.from({ length: 50 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 16 + Math.random() * 20,
    opacity: 0.08 + Math.random() * 0.07,
    color: watermarkColors[Math.floor(Math.random() * watermarkColors.length)],
    rotation: Math.random() * 360,
  }));

  const navButtons = [
    { label: "Import", href: "/products/import" },
    { label: "Export", href: "/products/export" },
    { label: "Machinery Rental", href: "/services/machinery-rent" },
    { label: "Transport", href: "/services/transport" },
    { label: "Custom Clearance", href: "/services/customs-clearance" },
    { label: "Construction Materials", href: "/services/construction-materials" },
  ];

  const buttonClasses = `
    bg-primary-hover 
    text-primary-light text-xl 
    px-7 py-3 
    rounded-full 
    border border-white/20 
    font-semibold 
    shadow-lg 
    transition 
    hover:bg-orange-300
  `;

  return (
    <section
      className="
        relative
        flex items-center justify-center
        px-4 pt-10 pb-10
        min-h-[55vh]
        bg-gradient-to-r from-primary-hover to-cream-50
        overflow-hidden
      "
    >
      {/* Background Watermarks */}
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
            <CoffeeBeanWaterMark size={64} className="w-6 h-6 opacity-80" />
          </div>
        </div>
      ))}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-2">
          <h1
            className="
              text-6xl md:text-7xl 
              font-bold 
              leading-tight 
              text-primary-light
            "
          >
            Your Trusted Partner in
          </h1>

          <h1
            className="
              text-6xl md:text-7xl 
              font-bold 
              leading-tight 
              text-orange-400
            "
          >
            Global Trade
          </h1>

          <p className="text-xl text-primary-light">
            Experience, reliability, speed, and excellence in every transaction.
            Partner with us to grow your business worldwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {navButtons.map((btn) => (
              <Link key={btn.href} href={btn.href} className={buttonClasses}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/images/hero-image.jpg"
            alt="Warehouse"
            width={576}
            height={384}
            className="
              morph 
              w-full h-96 
              object-cover 
              rounded-3xl 
              shadow-xl
            "
          />
        </div>
      </div>
    </section>
  );
}
