'use client';
import RequestInfoForm from '@/components/request-info-form';
import { useSearchParams } from 'next/navigation';

export default function RequestInfoPage() {
  const searchPs = useSearchParams();
  const initialProduct = searchPs.get('product')

  return (
    <main className="py-20 bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 text-center">Request Information</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white/80 rounded-3xl shadow-xl p-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">How can we help?</h2>
            <p className="text-primary-light mb-6">Fill out the form to request samples, check availability, get quotes, or ask about our services. Our team will respond promptly with the information you need.</p>
            <div className="bg-orange-50 rounded-xl p-6 shadow border border-orange-100">
              <h3 className="font-semibold mb-2 text-orange-400">Why request info?</h3>
              <ul className="list-disc pl-5 text-sm space-y-2 text-primary-light">
                <li>Get product samples and availability</li>
                <li>Receive quotes and proforma invoices</li>
                <li>Ask about transport, customs, or construction materials</li>
              </ul>
              <div className="mt-4 text-sm text-primary-light">
                <p className="mb-1"><strong>Office:</strong> Addis Ababa, Ethiopia</p>
                <p><strong>Phone:</strong> +251911208341</p>
                <p><strong>Email:</strong> info@homesidetrading.com</p>
              </div>
            </div>
          </section>
          <section>
            <RequestInfoForm initialProduct={initialProduct!} />
          </section>
        </div>
      </div>
    </main>
  );
}
