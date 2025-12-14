"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  /* Scroll background */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close desktop products dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    if (productsOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [productsOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-primary"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex justify-between items-center h-full">

            {/* LOGO */}
            <div className="flex items-center space-x-4 h-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <Link
                href="/"
                className="text-white font-bold text-xl tracking-tight hover:text-orange-400 transition"
              >
                HOME SIDE TRADING P.L.C
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-orange-400">Home</Link>
              <Link href="/about" className="text-white hover:text-orange-400">About</Link>
              <Link href="/#services" className="text-white hover:text-orange-400">Services</Link>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProductsOpen(!productsOpen);
                  }}
                  className="flex items-center text-white hover:text-orange-400"
                >
                  Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <Link href="/products/export" className="block px-4 py-2 text-gray-800 hover:bg-green-100">
                      Export Products
                    </Link>
                    <Link href="/products/import" className="block px-4 py-2 text-gray-800 hover:bg-green-100">
                      Import Products
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/request-info" className="text-white hover:text-orange-400">Request Info</Link>
              <Link href="/#why-us" className="text-white hover:text-orange-400">Why Us</Link>
              <Link href="/#customers" className="text-white hover:text-orange-400">Valued Customers</Link>
              <Link href="/#contact" className="text-white hover:text-orange-400">Contact</Link>
            </div>

            {/* MOBILE BURGER BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-green-700 hover:bg-green-800 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-white transition ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-primary shadow-lg border-t border-green-700 px-6 py-6 space-y-3">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/#services", label: "Services" },
            { href: "/products/export", label: "Export Products" },
            { href: "/products/import", label: "Import Products" },
            { href: "/request-info", label: "Request Info" },
            { href: "/#why-us", label: "Why Us" },
            { href: "/#customers", label: "Valued Customers" },
            { href: "/#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white font-medium px-4 py-3 rounded-lg hover:bg-green-700 hover:text-orange-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
