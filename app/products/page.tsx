import Link from "next/link"
import { exportProducts, Product } from "@/lib/products"
import SeedWatermarksClient from '@/components/seed-watermarks-client'
export const metadata = {
  title: "Import Products to Ethiopia | Vehicles, Machinery & Equipment",
  description:
    "Home Side Trading PLC imports vehicles, spare parts, construction equipment, and regulatory machinery into Ethiopia.",
};

export default function ProductsPage() {
  return (
    <main className="py-12">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <SeedWatermarksClient />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-3xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-primary-light mb-8">Explore our full product catalog. Click a product to request a sample or get a quote.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {exportProducts.map((p: Product) => (
              <article key={p.title} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 bg-white flex items-center justify-center">
                    <img src={p.img} alt={p.title} className="w-16 h-16 object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-primary-light mt-1">{p.subtitle ?? ''}</p>
                  </div>
                </div>

                <p className="text-sm text-primary-light mt-4 flex-1">{p.description ?? 'High-quality product suitable for industrial and commercial needs.'}</p>

                <div className="mt-4 flex items-center justify-between">
                  <Link href={`/sample-contact?product=${encodeURIComponent(p.title)}`} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md shadow">Request Sample</Link>
                  <Link href="#" className="text-sm text-primary-light underline">More details</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Need assistance choosing a product?</h3>
              <p className="text-sm opacity-90">Contact our sales team for guidance, pricing, and lead times.</p>
            </div>
            <div>
              <Link href="/sample-contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 rounded-full shadow">Contact Sales</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
