import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            HOME SIDE <span className="text-orange-400">TRADING P.L.C</span>
          </h3>
          <p className="text-white-200">
            Your trusted partner in international trade and logistics services.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-white-200 hover:text-orange-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
                  <h4 className="font-bold mb-4">Products</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/products/import"
                        className="text-white-200 hover:text-orange-400 transition"
                      >
                        Import
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/export"
                        className="text-white-200 hover:text-orange-400 transition"
                      >
                        Export
                      </Link>
                    </li>
                  </ul>
                </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/import"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Import
              </Link>
            </li>
            <li>
              <Link
                href="/services/export"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Export
              </Link>
            </li>
            <li>
              <Link
                href="/services/machinery-rent"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Machinery Rental
              </Link>
            </li>
            <li>
              <Link
                href="/services/transport"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Transport
              </Link>
            </li>
            <li>
              <Link
                href="/services/customs-clearance"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Customs Clearance
              </Link>
            </li>
            <li>
              <Link
                href="/services/construction-materials"
                className="text-white-200 hover:text-orange-400 transition"
              >
                Construction Materials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/home-side-trading-plc/?viewAsMember=true"
              className="bg-primary-light w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/home-side-trading-plc/?viewAsMember=true"
              className="bg-primary-light w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/home-side-trading-plc/?viewAsMember=true"
              className="bg-primary-light w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white-800 mt-12 pt-8 text-center text-white">
        <p>&copy; 2025 Home Side Trading PLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
