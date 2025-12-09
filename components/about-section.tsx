import Link from "next/link";
import Image from "next/image";
import SeedWatermark from "./seed-watermark";
import SeedWatermarksClient from "./seed-watermarks-client";

export default function AboutSection() {
  // Colors matching the star watermarks (primary and orange theme)
  const watermarkColors = [
    "text-primary-light",
    "text-primary",
    "text-orange-400",
    "text-orange-500",
  ];

  // Seed watermarks are rendered client-side to avoid SSR/CSR hydration mismatches

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Seed watermarks (client-only) */}
      <SeedWatermarksClient />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/about-image.jpg"
              alt="About Homeside Trading"
              width={600}
              height={400}
              className="w-full rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-orange-400 w-32 h-32 rounded-2xl z-10"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-primary-light">
              With many years of experience, Home Side Trading P.L.C has grown
              to become a leader in international trade services. Our commitment
              to quality and customer satisfaction sets us apart in the
              industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-hover p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    Years of Experience
                  </h4>
                  <p className="text-primary-light">
                    Trusted by clients worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-hover p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Global Network</h4>
                  <p className="text-primary-light">
                    World wide partnerships and reach
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-hover p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    Marking beyond expectations
                  </h4>
                  <p className="text-primary-light">
                    Recognized for excellence
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Link href="/about" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-400 transition shadow-lg">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
