import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Tarik G.",
    role: "CEO",
    img: "/images/team1.jpg",
  },
  {
    name: "Sara M.",
    role: "Operations Manager",
    img: "/images/team2.jpg",
  },
  {
    name: "Abel T.",
    role: "Trade Specialist",
    img: "/images/team3.jpg",
  },
  {
    name: "Lily A.",
    role: "Customer Relations",
    img: "/images/team4.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="py-20 bg-cream-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">About Us</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Company Overview</h2>
          <p className="text-primary-light mb-4">Home Side Trading PLC is a leader in international trade, specializing in import, export, machinery rental, and transport services. Our commitment to quality and customer satisfaction sets us apart.</p>
        </section>
        <section className="mb-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Mission</h3>
            <p className="text-primary-light">To deliver reliable, high-quality trade solutions and build lasting partnerships worldwide.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Vision</h3>
            <p className="text-primary-light">To be the most trusted and innovative trading company in the region.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Values</h3>
            <ul className="list-disc ml-6 text-primary-light">
              <li>Integrity</li>
              <li>Quality</li>
              <li>Customer Focus</li>
              <li>Innovation</li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <Image src={member.img} alt={member.name} width={96} height={96} className="rounded-full mb-4 object-cover" />
                <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-primary-light">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mt-12">
          <Link href="#contact" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-orange-400 transition shadow-lg text-lg font-semibold">
            Work With Us
          </Link>
        </section>
      </div>
    </main>
  );
}
