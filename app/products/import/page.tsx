import Link from "next/link";
import Image from "next/image";

import { importProducts } from "@/lib/products";


export default function ImportProductsPage() {
  return (
    <main className="py-20 bg-cream-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Import Products</h1>
        <p className="text-primary-light mb-8">Browse our import product catalog. Click a product to request a sample or get a quote.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {importProducts.map((p) => (
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
                <Link href={`/request-info?product=${encodeURIComponent(p.title)}`} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md shadow">Check Availability</Link>
                <Link href="#" className="text-sm text-primary-light underline">More details</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
