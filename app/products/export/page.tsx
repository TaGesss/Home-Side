import Link from "next/link";
import Image from "next/image";
import { exportProducts } from "@/lib/products";

export const metadata = {
  title: "Ethiopian Export Products | Coffee, Oilseeds, Pulses & Livestock",
  description:
    "Home Side Trading PLC exports Ethiopian coffee, sesame seeds, pulses, cereals, spices, and livestock to international markets.",
};

const exportCategories = [
  {
    name: "Coffee",
    products: [
      {
        title: "Ethiopian Arabica Coffee",
        img: "/images/coffee.jpg",
        description: "Premium Ethiopian Arabica beans, renowned for their flavor.",
        specs: "Grade 1, washed, sun-dried",
        packaging: "60kg jute bags",
      },
    ],
  },
  {
    name: "Pulses",
    products: [
      {
        title: "White Pea Beans",
        img: "/images/pea-beans.jpg",
        description: "High-quality white pea beans for export.",
        specs: "Cleaned, sorted",
        packaging: "50kg bags",
      },
      {
        title: "Red Kidney Beans",
        img: "/images/red-kidney.jpg",
        description: "Red kidney beans, rich in protein.",
        specs: "Cleaned, sorted",
        packaging: "50kg bags",
      },
    ],
  },
  {
    name: "Oil Seeds",
    products: [
      {
        title: "Sesame Seeds",
        img: "/images/sesame.jpg",
        description: "Top-grade sesame seeds for export.",
        specs: "Hulled, natural",
        packaging: "50kg bags",
      },
      {
        title: "Niger Seeds",
        img: "/images/niger.jpg",
        description: "Niger seeds, ideal for oil extraction.",
        specs: "Cleaned, sorted",
        packaging: "50kg bags",
      },
    ],
  },
  {
    name: "Spices",
    products: [
      {
        title: "Black Pepper",
        img: "/images/black-pepper.jpg",
        description: "Aromatic black pepper, hand-picked.",
        specs: "Whole, dried",
        packaging: "25kg bags",
      },
    ],
  },
  {
    name: "Other agricultural products",
    products: [
      {
        title: "Teff Grain",
        img: "/images/teff.jpg",
        description: "Ethiopian teff, gluten-free super grain.",
        specs: "Whole grain",
        packaging: "50kg bags",
      },
    ],
  },
];

export default function ExportProductsPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Export Products</h1>
        <p className="text-primary-light mb-8">Explore our export product catalog. Click a product to request a sample or get a quote.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exportProducts.map((p) => (
            <article key={p.title} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 bg-white flex items-center justify-center">
                  <Image src={p.img || "/images/placeholder.jpg"} alt={p.title} width={128} height={128} className="w-28 h-28 object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-primary-light mt-1">{p.subtitle ?? ""}</p>
                </div>
              </div>
              {p.description && (
                <p className="text-sm text-primary-light mt-4 flex-1">{p.description}</p>
              )}
              <div className="mt-4 flex items-center justify-between">
                <Link href={`/request-info?product=${encodeURIComponent(p.title)}`} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md shadow">Request Sample</Link>
                <Link href="#" className="text-sm text-primary-light underline">More details</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
