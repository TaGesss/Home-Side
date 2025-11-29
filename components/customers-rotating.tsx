"use client"
import Link from "next/link"
import Image from "next/image"

export default function CustomerRotate() {

    const customers = [
        {
            name: "Customer 1",
            description: "Leading supplier of industrial products.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Industrial & Manufacturing",
            categoryDescription: "Companies specializing in industrial equipment and manufacturing solutions",
            similarCustomers: [
                "ABC Manufacturing Ltd",
                "Industrial Solutions PLC",
                "MetalWorks Ethiopia",
                "Precision Tools Co.",
                "Heavy Industries Group",
            ],
        },
        {
            name: "Customer 2",
            description: "Trusted partner in logistics and freight services.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Logistics & Freight",
            categoryDescription: "Leading logistics companies and freight forwarding specialists",
            similarCustomers: [
                "Express Logistics Ltd",
                "Global Freight Solutions",
                "Swift Transport PLC",
                "Cargo Masters Ethiopia",
                "International Shipping Co.",
            ],
        },
        {
            name: "Customer 3",
            description: "International trader of commodities and goods.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Trading & Commodities",
            categoryDescription: "International traders and commodity export specialists",
            similarCustomers: [
                "Ethiopian Coffee Exporters",
                "Golden Sesame Trading",
                "Spice Route International",
                "Commodity Exchange Ltd",
                "Global Trade Partners",
            ],
        },
        {
            name: "Customer 4",
            description: "Leading contractor for construction projects.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Construction & Contracting",
            categoryDescription: "Major construction companies and building contractors",
            similarCustomers: [
                "BuildRight Construction",
                "Mega Projects PLC",
                "Urban Development Co.",
                "Infrastructure Builders",
                "Modern Construction Ltd",
            ],
        },
        {
            name: "Customer 5",
            description: "Premier agricultural equipment distributor.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Agricultural Equipment",
            categoryDescription: "Agricultural machinery distributors and farming equipment specialists",
            similarCustomers: [
                "Farm Equipment Solutions",
                "Agricultural Machinery Ltd",
                "Modern Farming Tools",
                "Harvest Equipment Co.",
                "Rural Development Partners",
            ],
        },
        {
            name: "Customer 6",
            description: "Major infrastructure development company.",
            image: "/placeholder.svg?height=160&width=320",
            category: "Infrastructure Development",
            categoryDescription: "Large-scale infrastructure and public works companies",
            similarCustomers: [
                "National Infrastructure PLC",
                "Highway Development Co.",
                "Bridge & Roads Ltd",
                "Public Works Contractors",
                "Mega Infrastructure Group",
            ],
        },
    ]

    // Duplicate the customers array to create a seamless loop
    const duplicatedCustomers = [...customers, ...customers];

    return (

        <div className="scroller m-28" data-speed="slow">
            <ul className="scroller__inner">
                {duplicatedCustomers.map((customer, idx) => (
                    <li key={idx}>
                        <div className="flex-1 bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full">
                            <div className="relative w-full h-32 mb-4">
                                <Image src={customer.image || "/placeholder.svg"} alt={customer.name} fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">{customer.name}</h3>
                            <p className="flex-1 text-sm text-primary-light mb-4">{customer.description}</p>
                            <Link href={`/customers/${customer.name.toLowerCase().replace(/\s+/g, "-")}`} className="mt-auto bg-orange-400 text-white py-2 rounded-full text-center hover:bg-orange-500 transition">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}