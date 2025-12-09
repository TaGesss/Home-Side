import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Tarik G.",
    role: "Chief Executive Officer",
    img: "/images/team1.jpg",
    bio: "Visionary leader with 15+ years in international trade, driving Homeside's growth and global partnerships."
  },
  {
    name: "Sara M.",
    role: "Operations Manager",
    img: "/images/team2.jpg",
    bio: "Expert in logistics and process optimization, ensuring seamless operations and client satisfaction."
  },
  {
    name: "Abel T.",
    role: "Trade Specialist",
    img: "/images/team3.jpg",
    bio: "Specialist in import/export compliance and market research, connecting clients to new opportunities."
  },
  {
    name: "Lily A.",
    role: "Customer Relations",
    img: "/images/team4.jpg",
    bio: "Dedicated to building strong client relationships and delivering exceptional service."
  },
];

export default function AboutPage() {
  return (
    <main className="py-20 bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-primary mb-8 text-center tracking-tight drop-shadow-lg">About Homeside Trading PLC</h1>
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <Image src="/images/about-hero.jpg" alt="Homeside Trading" width={600} height={400} className="rounded-3xl shadow-xl object-cover w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-lg text-primary-light mb-4 leading-relaxed">
              Homeside Trading PLC is a premier provider of international trade and logistics solutions, headquartered in Addis Ababa, Ethiopia. With a proven track record in import, export, machinery rental, and transport, we empower businesses to reach new markets and achieve operational excellence. Our team combines deep industry expertise with a passion for innovation, ensuring every client receives tailored, reliable, and cost-effective services.
            </p>
            <p className="text-primary-light mb-2">
              We believe in building lasting partnerships based on trust, transparency, and mutual growth. Our commitment to quality and customer satisfaction is at the heart of everything we do.
            </p>
          </div>
        </section>
        <section className="mb-16 grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Our Mission</h3>
            <p className="text-primary-light text-center">To deliver reliable, high-quality trade solutions and build lasting partnerships worldwide.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Our Vision</h3>
            <p className="text-primary-light text-center">To be the most trusted and innovative trading company in Africa and beyond.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Our Values</h3>
            <ul className="list-disc ml-6 text-primary-light text-left">
              <li>Integrity & Ethics</li>
              <li>Quality & Excellence</li>
              <li>Customer Focus</li>
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition">
                <Image src={member.img} alt={member.name} width={110} height={110} className="rounded-full mb-4 object-cover border-4 border-orange-100 shadow" />
                <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-primary-light mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-orange-50 rounded-3xl shadow-inner py-12 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Partner With Us</h2>
          <p className="text-primary-light mb-6 max-w-2xl mx-auto text-lg">
            Whether you are looking to import, export, or streamline your supply chain, Homeside Trading PLC is your trusted partner. Discover how our expertise and dedication can help your business grow.
          </p>
          <Link href="/#contact" className="bg-primary text-white px-10 py-4 rounded-full hover:bg-orange-400 transition shadow-lg text-lg font-semibold">
            Get In Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
