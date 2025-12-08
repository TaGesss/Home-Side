import Link from "next/link";
import Image from "next/image";

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
    <main className="py-20 bg-cream-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Export Products</h1>
        {exportCategories.map((cat, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">{cat.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cat.products.map((prod, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <Image src={prod.img} alt={prod.title} width={160} height={120} className="rounded-xl mb-4 object-cover" />
                  <h3 className="text-lg font-bold text-primary mb-2">{prod.title}</h3>
                  <p className="text-primary-light mb-2">{prod.description}</p>
                  <p className="text-sm text-primary mb-1"><strong>Specs:</strong> {prod.specs}</p>
                  <p className="text-sm text-primary mb-4"><strong>Packaging:</strong> {prod.packaging}</p>
                  <Link href="/request-info?type=sample&product=" className="mt-auto bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition font-medium">
                    Request Sample
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
