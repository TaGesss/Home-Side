"use client"
import { useState, useEffect, useRef } from "react"

export default function FloatingButtons() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Show buttons after a slight delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const makeCall = () => {
    try {
      window.location.href = "tel:+251911208341"
    } catch (error) {
      // Fallback: copy number to clipboard and show alert
      navigator.clipboard
        .writeText("+251911208341")
        .then(() => {
          alert("Phone number copied to clipboard: +251911208341")
        })
        .catch(() => {
          alert("Please call: +251911208341")
        })
    }
  }

  const sendEmail = (subject: string) => {
    try {
      const email = "homeside2019@gmail.com"
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
    } catch (error) {
      // Fallback: copy email to clipboard and show alert
      navigator.clipboard
        .writeText("homeside2019@gmail.com")
        .then(() => {
          alert(`Email address copied to clipboard: homeside2019@gmail.com\nSubject: ${subject}`)
        })
        .catch(() => {
          alert(`Please email: homeside2019@gmail.com\nSubject: ${subject}`)
        })
    }
    setIsDropdownOpen(false)
  }

  const sendQuickEmail = () => {
    try {
      const email = "homeside2019@gmail.com"
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("General Inquiry")}`
    } catch (error) {
      // Fallback: copy email to clipboard and show alert
      navigator.clipboard
        .writeText("homeside2019@gmail.com")
        .then(() => {
          alert("Email address copied to clipboard: homeside2019@gmail.com")
        })
        .catch(() => {
          alert("Please email: homeside2019@gmail.com")
        })
    }
  }

  const customSubject = () => {
    const subject = prompt("Please enter your subject:")
    if (subject) sendEmail(subject)
  }

  const openWhatsApp = () => {
    try {
      const phoneNumber = "251911208341" // Remove the + for WhatsApp
      const message = "Hello, I'm interested in your services."
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    } catch (error) {
      alert("Please contact us via WhatsApp: +251911208341")
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col space-y-4 items-end z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 transition transform hover:scale-105 group"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="font-semibold">WhatsApp</span>
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-400"></span>
        </span>
      </button>

      {/* Quick Call */}
      <button
        onClick={makeCall}
        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-blue-600 transition transform hover:scale-105 group"
        aria-label="Make a phone call"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 group-hover:rotate-12 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="font-semibold">Quick Call</span>
      </button>

      {/* Quick Email */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-orange-600 transition transform hover:scale-105 group"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label="Send an email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-rotate-12 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="font-semibold">Quick Email</span>
        </button>

        {/* Dropdown */}
        <div
          className={`absolute bottom-full right-0 mb-2 bg-white shadow-2xl rounded-xl p-4 space-y-2 w-72 transform transition-all duration-300 origin-bottom-right ${
            isDropdownOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
            <div className="font-bold text-orange-700">Select a Subject</div>
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {[
            "Import Services",
            "Export Services",
            "Machinery Rental",
            "Transport Services",
            "Customs Clearance",
            "Construction Materials",
          ].map((subject) => (
            <button
              key={subject}
              onClick={() => sendEmail(subject)}
              className="block text-left w-full hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {subject}
            </button>
          ))}

          <button
            onClick={customSubject}
            className="block text-left w-full hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold text-blue-600 transition-colors duration-200 mt-2 border-t border-gray-100 pt-2"
          >
            Other (Write your own)
          </button>
        </div>
      </div>
    </div>
  )
}
