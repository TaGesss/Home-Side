"use client";
import { useState } from "react";
import { exportProducts, importProducts } from "@/lib/products";

const requestTypes = [
  "Sample request",
  "Availability",
  "Custom clearance",
  "Transport service",
  "Quote",
  "Proforma invoice",
  "General info",
  "Machinery Rental",
  "Construction Materials",
  "Other",
];

const countries = ["Ethiopia", "Kenya", "USA", "China", "India", "Germany", "Other"];

function RequestInfoForm({ initialProduct }: { initialProduct?: string }) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    message: "",
    requestType: "Sample request",
    products: initialProduct ? [initialProduct] : [""],
    other: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  function handleProductChange(idx: number, value: string) {
    const products = [...form.products];
    products[idx] = value;
    setForm((f) => ({ ...f, products }));
  }
  function addProduct() {
    setForm((f) => ({ ...f, products: [...f.products, ""] }));
  }
  function removeProduct(idx: number) {
    setForm((f) => ({ ...f, products: f.products.filter((_, i) => i !== idx) }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function renderTypeFields() {
    switch (form.requestType) {
      case "Sample request":
        return (
          <div className="space-y-2">
            {form.products.map((prod, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <select
                  value={prod}
                  onChange={(e) => handleProductChange(idx, e.target.value)}
                  required
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Select export product</option>
                  {exportProducts.map((p) => (
                    <option key={p.title} value={p.title}>{p.title}</option>
                  ))}
                </select>
                {form.products.length > 1 && (
                  <button type="button" onClick={() => removeProduct(idx)} className="text-red-500">Remove</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addProduct} className="text-primary mt-2">Add another product</button>
          </div>
        );
      case "Availability":
        return (
          <div className="space-y-2">
            {form.products.map((prod, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <select
                  value={prod}
                  onChange={(e) => handleProductChange(idx, e.target.value)}
                  required
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Select import or export product</option>
                  {importProducts.map((p) => (
                    <option key={p.title} value={p.title}>{p.title} (Import)</option>
                  ))}
                  {exportProducts.map((p) => (
                    <option key={p.title} value={p.title}>{p.title} (Export)</option>
                  ))}
                </select>
                {form.products.length > 1 && (
                  <button type="button" onClick={() => removeProduct(idx)} className="text-red-500">Remove</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addProduct} className="text-primary mt-2">Add another product</button>
          </div>
        );
      case "Custom clearance":
        return (
          <select name="customClearanceType" onChange={handleChange} className="border rounded px-3 py-2 w-full">
            <option value="Import Clearance and Transit">Import Clearance and Transit</option>
            <option value="Export Clearance and Transit">Export Clearance and Transit</option>
            <option value="Bonded Warehousing">Bonded Warehousing</option>
            <option value="Customs storage">Customs storage</option>
            <option value="Documentation">Documentation</option>
            <option value="Regulatory Compliance">Regulatory Compliance</option>
          </select>
        );
      case "Transport service":
        return (
          <select name="transportType" onChange={handleChange} className="border rounded px-3 py-2 w-full" required>
            <option value="Dry Freight Transport">Dry Freight Transport</option>
            <option value="Container Transport">Container Transport</option>
            <option value="Heavy Machinery Transport">Heavy Machinery Transport</option>
            <option value="Cement and Aggregate Transport">Cement and Aggregate Transport</option>
            <option value="Other transport services">Other transport services</option>
          </select>
        );
      case "Machinery Rental":
        return (
          <select name="machineryType" onChange={handleChange} className="border rounded px-3 py-2 w-full" required>
            <option value="Excavators">Excavators</option>
            <option value="Bulldozers">Bulldozers</option>
            <option value="Cranes (Mobile & Tower)">Cranes (Mobile & Tower)</option>
            <option value="Generators">Generators</option>
            <option value="Loaders">Loaders</option>
          </select>
        );
      case "Construction Materials":
        return (
          <select name="constructionType" onChange={handleChange} className="border rounded px-3 py-2 w-full" required>
            <option value="Cement & Concrete">Cement & Concrete</option>
            <option value="Steel Products">Steel Products</option>
            <option value="Finishing Materials">Finishing Materials</option>
            <option value="Roofing Materials">Roofing Materials</option>
            <option value="Plumbing & ElectricalHeating Equipment">Plumbing & ElectricalHeating Equipment</option>
            <option value="Other Construction Materials">Other Construction Materials</option>
          </select>
        );
      case "Other":
        return (
          <input type="text" name="other" value={form.other} onChange={handleChange} placeholder="Write your request" className="border rounded px-3 py-2 w-full" required />
        );
      default:
        return null;
    }
  }

  return (
    <>
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center shadow">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Thank you for reaching out.</h3>
          <p className="text-primary-light mb-2">We will get back to you as soon as possible.</p>
          <p className="text-sm text-primary-light">
            For urgent inquiries, email us at{" "}
            <a href="mailto:info@homesidetrading.com" className="text-orange-400 underline">info@homesidetrading.com</a>.
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border rounded px-3 py-2 w-full" required />
          <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" className="border rounded px-3 py-2 w-full" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded px-3 py-2 w-full" required />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded px-3 py-2 w-full" required />
          <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border rounded px-3 py-2 w-full" required />
          <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="State" className="border rounded px-3 py-2 w-full" />
          <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City" className="border rounded px-3 py-2 w-full" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border rounded px-3 py-2 w-full" rows={3} />
          <select name="requestType" value={form.requestType} onChange={handleChange} className="border rounded px-3 py-2 w-full" required>
            <option value="">Select service</option>
            {requestTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {renderTypeFields()}
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-400 transition font-semibold w-full">Submit Request</button>
        </form>
      )}
    </>
  );
}
export default RequestInfoForm;
