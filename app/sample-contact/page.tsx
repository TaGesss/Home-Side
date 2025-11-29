import SampleContactForm from '@/components/sample-contact-form'
import SeedWatermarksClient from '@/components/seed-watermarks-client'
import SunflowerWatermark from '@/components/sunflower-watermark'

export default function SampleContactPage({ searchParams }: { searchParams?: { product?: string } }) {
  const initialProduct = searchParams?.product ?? ""

  return (
    <main className="py-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <SeedWatermarksClient />
        </div>

        <SunflowerWatermark className="hidden md:block absolute -left-16 -top-16 w-64 h-64 text-primary/8" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <section className="py-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Request a Sample</h1>
              <p className="text-lg text-primary-light mb-6">Provide your details and the product you want a sample of. We'll check availability, prepare samples, and share quotes.</p>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/30">
                <h3 className="font-semibold mb-2">Why request a sample?</h3>
                <ul className="list-disc pl-5 text-sm space-y-2 text-primary-light">
                  <li>Verify quality before placing a bulk order</li>
                  <li>Assess packaging and sizing for your needs</li>
                  <li>Receive sample pricing and lead times</li>
                </ul>

                <div className="mt-4 text-sm text-primary-light">
                  <p className="mb-1"><strong>Office:</strong> Addis Ababa, Ethiopia</p>
                  <p><strong>Email:</strong> info@homeside-trading.com</p>
                </div>
              </div>
            </section>

            <section className="py-6">
              <div>
                <SampleContactForm initialProduct={initialProduct} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
