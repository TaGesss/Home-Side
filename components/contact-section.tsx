"use client";
import { useState, useEffect, useRef } from "react";
import type React from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Check for success parameter in URL (for backward compatibility)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowThankYou(true);
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.hash
      );
      setTimeout(() => setShowThankYou(false), 5000);
    }
  }, []);
  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setError(null);

      // Replace these with your actual EmailJS credentials
      const serviceId = "service_zn9gls9";
      const templateId = "template_quyqo05";
      const publicKey = "Z6VC6ev8ow2O6EiCj";

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      // Reset the form
      formRef.current.reset();

      // Show thank you message
      setShowThankYou(true);

      // Hide the message after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

      // Scroll to contact section
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 bg-primary-light text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch with us</h2>

        {/* Thank You Message */}
        {showThankYou && (
          <div className="mb-8 bg-green-600 border border-green-500 rounded-lg p-4 text-center animate-fade-in">
            <div className="flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">Thank You!</h3>
            </div>
            <p className="text-primary">
              Your message has been received successfully. We will get back to
              you as soon as possible.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-600 border border-red-500 rounded-lg p-4 text-center animate-fade-in">
            <div className="flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">Error</h3>
            </div>
            <p className="text-red-100">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Our Location</h4>
                <p>
                
                    Gerji - BMA Plaza, Addis Ababa, Ethiopia
                
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <div>
                <h4 className="font-bold">Phone Number</h4>
                <p>
                  <a
                    href="tel:+251911208341"
                    className="underline hover:text-orange-300"
                  >
                    +251911208341
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <div>
                <h4 className="font-bold">Email Address</h4>
                <p>
                  <a
                    href="mailto:info@homesidetrading.com"
                    className="underline hover:text-orange-300"
                  >
                    info@homesidetrading.com
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6 rounded-xl overflow-hidden h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.2930689491796!2d38.80276249914399!3d9.000728202415097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500444fad5b%3A0x7f62f36a8efad200!2sBMA%20PLAZA!5e0!3m2!1sen!2set!4v1765396709105!5m2!1sen!2set"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-5">
              Send Us a Message
            </h3>
            <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block text-primary-light mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-primary-light mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-primary-light mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="user_phone"
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-primary-light mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  name="user_organization"
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-primary-light mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-primary-light mb-1">
                  Message *
                </label>
                <textarea
                  rows={3}
                  name="message"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                ></textarea>
              </div>

              {/* Hidden field for recipient email */}
              <input
                type="hidden"
                name="to_email"
                value="info@homesidetrading.com"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition w-full flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
