

export type Product = {
  title: string;
  href: string;
  img?: string;
  subtitle?: string;
  description?: string;
};

export const exportProducts: Product[] = [
  // 1. Livestock and Processed Meat
  { title: "Cattle", href: "#", img: "/images/Cattle.jpg", subtitle: "Livestock and Processed Meat" },
  { title: "Goat", href: "#", img: "/images/Goat.jpg", subtitle: "Livestock and Processed Meat" },
  { title: "Sheep", href: "#", img: "/images/Sheep.jpg", subtitle: "Livestock and Processed Meat" },

  // 2. Coffee and Tea
  { title: "Arabica (Sidamo, Yirgacheffe, Harar)", href: "#", img: "/images/Arebica Coffee.jpg", subtitle: "Coffee and Tea" },
  { title: "Specialty Coffee", href: "#", img: "/images/Speciality Coffee.webp", subtitle: "Coffee and Tea" },
  { title: "Tea Leaves", href: "#", img: "/images/Tea leaves.jpg", subtitle: "Coffee and Tea" },

  // 3. Oilseeds
  { title: "Wollega Sesame Seed", href: "#", img: "/images/Wollega Sesame Seed.jpg", subtitle: "Sesame seeds" },
  { title: "Whitish Humera", href: "#", img: "/images/Whitish Humera.jpg", subtitle: "Sesame seeds" },
  { title: "Reddish Humera", href: "#", img: "/images/Reddish Humera.jpg", subtitle: "Sesame seeds" },
  { title: "Niger seed", href: "#", img: "/images/Niger seed.jpg", subtitle: "Oilseeds" },
  { title: "Sunflower seeds", href: "#", img: "/images/Sunflower seeds.jpg", subtitle: "Oilseeds" },
  { title: "Soybean", href: "#", img: "/images/Soybean.webp", subtitle: "Oilseeds" },
  { title: "Linseed / Flaxseed", href: "#", img: "/images/Linseed - Flaxseed.jpg", subtitle: "Oilseeds" },
  { title: "Peanut", href: "#", img: "/images/Peanut.jpg", subtitle: "Oilseeds" },

  // 4. Pulses and Legumes
  { title: "Kabuli Chickpea", href: "#", img: "/images/Kabuli Chickpea.jpg", subtitle: "Chickpeas" },
  { title: "Desi Chickpea", href: "#", img: "/images/Desi Chickpea.jpg", subtitle: "Chickpeas" },
  { title: "Lentils", href: "#", img: "/images/Lentils.jpg", subtitle: "Pulses and Legumes" },
  { title: "Faba beans (broad beans)", href: "#", img: "/images/Faba beans (broad beans).jpg", subtitle: "Pulses and Legumes" },
  { title: "Redy kidney bean", href: "#", img: "/images/Redy kidney bean.jpg", subtitle: "Haricot beans" },
  { title: "Pinto beans", href: "#", img: "/images/Pinto beans.jpg", subtitle: "Haricot beans" },
  { title: "Red speckled bean", href: "#", img: "/images/Red speckled bean.jpg", subtitle: "Haricot beans" },
  { title: "Large light brown kidney peas", href: "#", img: "/images/Large light brown kidney peas.jpg", subtitle: "Haricot beans" },
  { title: "White pea", href: "#", img: "/images/White pea.jpg", subtitle: "Pulses and Legumes" },
  { title: "Green mung bean", href: "#", img: "/images/Green mung bean.jpg", subtitle: "Pulses and Legumes" },
  { title: "Pigeon bean", href: "#", img: "/images/Pigeon bean.jpg", subtitle: "Pulses and Legumes" },
  { title: "Lupin", href: "#", img: "/images/Lupin.jpg", subtitle: "Pulses and Legumes" },

  // 5. Spices and Herbs
  { title: "Cardamom", href: "#", img: "/images/Cardamom.jpg", subtitle: "Spices and Herbs" },
  { title: "Ginger", href: "#", img: "/images/Ginger.jpg", subtitle: "Spices and Herbs" },
  { title: "Turmeric finger", href: "#", img: "/images/Turmeric finger.jpg", subtitle: "Spices and Herbs" },
  { title: "Long pepper", href: "#", img: "/images/Long pepper.jpg", subtitle: "Spices and Herbs" },
  { title: "Black cumin", href: "#", img: "/images/Black cumin.jpg", subtitle: "Spices and Herbs" },

  // 6. Cereals
  { title: "Teff (used for injera)", href: "#", img: "/images/Teff.jpg", subtitle: "Cereals" },
  { title: "Barley", href: "#", img: "/images/Barley.jpg", subtitle: "Cereals" },
];

export const importProducts: Product[] = [
  // 1. Vehicles
  { title: "Passenger Vehicles", href: "#", img: "/images/Passenger Vehicles.jpg", subtitle: "Vehicles" },
  { title: "Commercial Vehicles", href: "#", img: "/images/Commercial Vehicles.jpg", subtitle: "Vehicles" },
  { title: "Special Purpose Vehicles", href: "#", img: "/images/Special Purpose Vehicles.webp", subtitle: "Vehicles" },

  // 2. Spare Parts
  { title: "Engine & Powertrain Parts", href: "#", img: "/images/Engine & Powertrain Parts.webp", subtitle: "Spare Parts" },
  { title: "Electrical & Electronics", href: "#", img: "/images/Electrical & Electronics.webp", subtitle: "Spare Parts" },
  { title: "Suspension & Brake Parts", href: "#", img: "/images/Suspension & Brake Parts.webp", subtitle: "Spare Parts" },
  { title: "Body Parts", href: "#", img: "/images/Body Parts.jpg", subtitle: "Spare Parts" },
  { title: "Tires & Wheels", href: "#", img: "/images/Tires & Wheels.jpg", subtitle: "Spare Parts" },

  // 3. Construction Equipment
  { title: "Earthmoving Equipment", href: "#", img: "/images/Earthmoving Equipment.webp", subtitle: "Construction Equipment" },
  { title: "Material Handling Equipment", href: "#", img: "/images/Material Handling Equipment.jpg", subtitle: "Construction Equipment" },
  { title: "Concrete Equipment", href: "#", img: "/images/Concrete Equipment.jpg", subtitle: "Construction Equipment" },
  { title: "Generators & Power Equipment", href: "#", img: "/images/Generators & Power Equipment.jpg", subtitle: "Construction Equipment" },

  // 4. Regulatory Equipment
  { title: "Safety & Compliance Equipment", href: "#", img: "/images/Safety & Compliance Equipment.png", subtitle: "Regulatory Equipment" },
  { title: "Inspection & Diagnostic Equipment", href: "#", img: "/images/Inspection & Diagnostic Equipment.png", subtitle: "Regulatory Equipment" },
  { title: "Traffic & Road Regulatory Items", href: "#", img: "/images/Traffic & Road Regulatory Items.jpg", subtitle: "Regulatory Equipment" },

  // 5. Car Decor & Accessories
  { title: "Interior Accessories", href: "#", img: "/images/Interior Accessories.jpg", subtitle: "Car Decor & Accessories" },
  { title: "Exterior Accessories", href: "#", img: "/images/Exterior Accessories.webp", subtitle: "Car Decor & Accessories" },
  { title: "Lighting & Style", href: "#", img: "/images/Lighting & Style.jpg", subtitle: "Car Decor & Accessories" },
  { title: "Digital & Comfort Enhancements", href: "#", img: "/images/Digital & Comfort Enhancements.webp", subtitle: "Car Decor & Accessories" },
];
