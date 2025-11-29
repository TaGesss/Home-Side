"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { products } from "@/lib/products"

type FormState = {
  name: string
  email: string
  phone: string
  organization: string
  country: string
  state: string
  city: string
  postalcode: string
  product: string
  message: string
}

type SampleContactProps = {
  className?: string
  initialProduct?: string
}

export default function SampleContactForm({ className = "", initialProduct = "" }: SampleContactProps) {
  const [form, setForm] = useState<FormState>(() => ({
    name: "",
    email: "",
    phone: "",
    organization: "",
    country: "",
    state: "",
    city: "",
    postalcode: "",
    product: initialProduct || "",
    message: "",
  }))
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message?: string }>({ type: "idle" })

  function update(field: keyof FormState, value: string) {
    setForm((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Basic required validation
    if (!form.name || !form.email || !form.phone || !form.country || !form.state || !form.city || !form.postalcode || !form.product) {
      setStatus({ type: "error", message: "Please fill all required fields." })
      return
    }

    setStatus({ type: "sending" })

    try {
      // Replace the strings below with your EmailJS service ID, template ID and public key
      const SERVICE_ID = "YOUR_SERVICE_ID"
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID"
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        organization: form.organization,
        country: form.country,
        state: form.state,
        city: form.city,
        postalcode: form.postalcode,
        product: form.product,
        message: form.message,
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      setStatus({ type: "success", message: "Request sent — we'll contact you soon." })
      setForm({ name: "", email: "", phone: "", organization: "", country: "", state: "", city: "", postalcode: "", product: "", message: "" })
    } catch (err: any) {
      setStatus({ type: "error", message: err?.text || "Failed to send. Check console for details." })
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className} bg-white p-6 rounded-2xl shadow-md`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium">Name *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.name} onChange={(e) => update('name', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email *</span>
          <input type="email" className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.email} onChange={(e) => update('email', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Phone *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Organization</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.organization} onChange={(e) => update('organization', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Country *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.country} onChange={(e) => update('country', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">State *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.state} onChange={(e) => update('state', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">City *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.city} onChange={(e) => update('city', e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Postal Code *</span>
          <input className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.postalcode} onChange={(e) => update('postalcode', e.target.value)} />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Product *</span>
          <select className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.product} onChange={(e) => update('product', e.target.value)}>
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.title} value={p.title}>{p.title}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Message</span>
          <textarea rows={4} className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" value={form.message} onChange={(e) => update('message', e.target.value)} />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          {status.type === 'error' && <p className="text-sm text-red-600">{status.message}</p>}
          {status.type === 'success' && <p className="text-sm text-green-600">{status.message}</p>}
        </div>
        <button type="submit" className="bg-primary px-6 py-2 rounded-md text-white shadow" disabled={status.type === 'sending'}>
          {status.type === 'sending' ? 'Sending...' : 'Send Request'}
        </button>
      </div>
    </form>
  )
}
