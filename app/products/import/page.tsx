import Link from "next/link";
import Image from "next/image";

const importCategories = [
  {
    name: "Coffee",
    products: [
      {
        title: "Roasted Coffee",
        img: "/images/coffee-import.jpg",
        description: "Premium roasted coffee for import.",
        specs: "Medium roast, vacuum packed",
        packaging: "1kg bags",
      },
    ],
  },
  {
    name: "Pulses",
    products: [
      {
        title: "White Pea Beans",
        img: "/images/pea-beans-import.jpg",
        description: "High-quality white pea beans for import.",
        specs: "Cleaned, sorted",
        packaging: "50kg bags",
      },
      {
        title: "Red Kidney Beans",
        img: "/images/red-kidney-import.jpg",
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
        img: "/images/sesame-import.jpg",
        description: "Top-grade sesame seeds for import.",
        specs: "Hulled, natural",
        packaging: "50kg bags",
      },
      {
        title: "Niger Seeds",
        img: "/images/niger-import.jpg",
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
        img: "/images/black-pepper-import.jpg",
        description: "Aromatic black pepper for import.",
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
        img: "/images/teff-import.jpg",
        description: "Teff grain for import.",
        specs: "Whole grain",
        packaging: "50kg bags",
      },
    ],
  },
];

export default function ImportProductsPage() {
  return (
    <main className="py-20 bg-cream-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Import Products</h1>
        {importCategories.map((cat, idx) => (
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
