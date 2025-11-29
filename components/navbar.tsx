"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all-500 h-16 ${
        isScrolled ? "bg-primary backdrop-blur-md shadow-modern" : "bg-primary backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-4 slide-in-left h-full">
            <div className="relative">
              <Image
                src="/logo.png?height=48&width=48"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain transition-all-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-all-300"></div>
            </div>
            <Link
              href="/"
              className="text-white font-bold text-2xl tracking-tight hover:text-orange-400 transition-all-300"
            >
              HOME SIDE TRADING P.L.C
              {/* <span className="text-orange-400">TRADING</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 slide-in-right h-full items-center">
            <Link
              href="/"
              className="text-white hover:text-orange-400 transition"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-orange-400 transition"
            >
              About
            </Link>
            <Link
              href="/#products"
              className="text-white hover:text-orange-400 transition"
            >
              Products
            </Link>
            <Link
              href="/sample-contact"
              className="text-white hover:text-orange-400 transition"
            >
              Request Sample
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-orange-400 transition"
            >
              Services
            </Link>
            <Link
              href="/#customers"
              className="text-white hover:text-orange-400 transition"
            >
              Customers
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-orange-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition-all-300"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-all-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-green-700">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About" },
              { href: "/#products", label: "Products" },
              { href: "/sample-contact", label: "Request Sample" },
              { href: "/#services", label: "Services" },
              { href: "/#customers", label: "Customers" },
              { href: "/#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white font-medium hover:text-orange-400 hover:bg-green-700 px-4 py-2 rounded-lg transition-all-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
