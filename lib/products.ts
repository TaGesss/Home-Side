export type Product = {
  title: string;
  href: string;
  img?: string;
  subtitle?: string;
  description?: string;
  imgAlt?: string; // added for image fallback description
};

export const exportProducts: Product[] = [
  { title: "Black Cumin", href: "#", img: "/images/Black cumin.jpg", subtitle: "Spices and Herbs", description: "High-quality black cumin seeds for cooking and herbal use.", imgAlt: "Black cumin seeds" },
 { title: "White Beans", href: "#", img: "/images/White pea.jpg", subtitle: "Pulses and Legumes", description: "High-quality white Beans for  export.", imgAlt: "White peas" },
 // 4. Pulses and Legumes
  { title: "Kabuli Chickpea", href: "#", img: "/images/Kabuli Chickpea.jpg", subtitle: "Chickpeas", description: "High-quality Kabuli chickpeas for cooking and export.", imgAlt: "Kabuli chickpeas" },
  { title: "Lentils", href: "#", img: "/images/Lentils.jpg", subtitle: "Pulses and Legumes", description: "Nutrient-rich lentils perfect for soups, stews, and export.", imgAlt: "Lentils" },
  { title: "Faba Beans (Broad Beans)", href: "#", img: "/images/Faba beans (broad beans).jpg", subtitle: "Pulses and Legumes", description: "High-quality faba beans for culinary use and export.", imgAlt: "Faba beans / Broad beans" },
  { title: "Red Kidney Beans", href: "#", img: "/images/Redy kidney bean.jpg", subtitle: "Haricot beans", description: "Premium red kidney beans for cooking and export.", imgAlt: "Red kidney beans" },
  { title: "Pinto Beans", href: "#", img: "/images/Pinto beans.jpg", subtitle: "Haricot beans", description: "Quality pinto beans suitable for culinary use.", imgAlt: "Pinto beans" },
  { title: "Red Speckled Beans", href: "#", img: "/images/Red speckled bean.jpg", subtitle: "Haricot beans", description: "High-quality red speckled beans for cooking.", imgAlt: "Red speckled beans" },

 
  { title: "Green Mung Beans", href: "#", img: "/images/Green mung bean.jpg", subtitle: "Pulses and Legumes", description: "Premium green mung beans for sprouting and cooking.", imgAlt: "Green mung beans" },
  { title: "Pigeon Beans", href: "#", img: "/images/Pigeon bean.jpg", subtitle: "Pulses and Legumes", description: "High-quality pigeon beans for culinary use.", imgAlt: "Pigeon beans" },
  
  { 
    title: "Wollega Sesame Seed - Premium Quality", 
    href: "#", 
    img: "/images/Wollega Sesame Seed.jpg", 
    subtitle: "Sesame seeds",
    description: "High-quality sesame seeds from Wollega region. Ideal for cooking, oil extraction, and export.",
    imgAlt: "Wollega sesame seeds"
  },
  { 
    title: "Whitish Humera Sesame Seed", 
    href: "#", 
    img: "/images/Whitish Humera.jpg", 
    subtitle: "Sesame seeds",
    description: "Premium whitish sesame seeds sourced from Humera. Suitable for both culinary and industrial uses.",
    imgAlt: "Whitish Humera sesame seeds"
  },
  { 
    title: "Reddish Humera Sesame Seed", 
    href: "#", 
    img: "/images/Reddish Humera.jpg", 
    subtitle: "Sesame seeds",
    description: "High-quality reddish sesame seeds from Humera, perfect for export and culinary applications.",
    imgAlt: "Reddish Humera sesame seeds"
  },
  { title: "Niger Seed", href: "#", img: "/images/Niger seed.jpg", subtitle: "Oilseeds", description: "Niger seeds suitable for oil extraction and livestock feed.", imgAlt: "Niger seeds for oil and feed" },
  { title: "Sunflower Seeds", href: "#", img: "/images/Sunflower seeds.jpg", subtitle: "Oilseeds", description: "Premium sunflower seeds for oil production and snacks.", imgAlt: "Sunflower seeds" },
  { title: "Soybean", href: "#", img: "/images/Soybean.webp", subtitle: "Oilseeds", description: "High-quality soybeans for food and oil processing.", imgAlt: "Soybeans for food and oil" },
  { title: "Linseed / Flaxseed", href: "#", img: "/images/Linseed - Flaxseed.jpg", subtitle: "Oilseeds", description: "Flaxseed used for health products and oil extraction.", imgAlt: "Flaxseed / Linseed" },
  { title: "Peanut", href: "#", img: "/images/Peanut.jpg", subtitle: "Oilseeds", description: "Premium peanuts for snacks, oil, and food production.", imgAlt: "Peanuts for oil and consumption" },

  
  
  { title: "Turmeric Finger", href: "#", img: "/images/Turmeric finger.jpg", subtitle: "Spices and Herbs", description: "Premium turmeric fingers for cooking and natural remedies.", imgAlt: "Turmeric finger roots" },
  { title: "Long Pepper", href: "#", img: "/images/Long pepper.jpg", subtitle: "Spices and Herbs", description: "Exotic long pepper for culinary use and medicinal purposes.", imgAlt: "Long pepper spice" },
  

  // 6. Cereals
  { title: "Teff (used for injera)", href: "#", img: "/images/Teff.jpg", subtitle: "Cereals", description: "Ethiopian teff for making traditional injera. Nutritious and high-quality.", imgAlt: "Teff grains" },
  
  // 1. Livestock and Processed Meat
  { 
    title: "Cattle for Sale - High-Quality Livestock", 
    href: "#", 
    img: "/images/Cattle.jpg", 
    subtitle: "Livestock and Processed Meat",
    description: "A Quality cattle available for sale. Ideal for meat production. Ethically raised livestock with proper documentation.",
    imgAlt: "Healthy cattle raised for meat or breeding purposes"
  },
  { 
    title: "Goats for Sale - Healthy Livestock", 
    href: "#", 
    img: "/images/Goat.jpg", 
    subtitle: "Livestock and Processed Meat",
    description: "Healthy goats available for sale, perfect for dairy or meat production. Ethically farmed and fully documented.",
    imgAlt: "Goat livestock ready for sale"
  },
  { 
    title: "Sheep for Sale - Premium Livestock", 
    href: "#", 
    img: "/images/Sheep.jpg", 
    subtitle: "Livestock and Processed Meat",
    description: "High-quality sheep for sale. Suitable for wool, meat, or breeding.",
    imgAlt: "Premium sheep for sale"
  },
  // 2. Coffee and Tea
  { 
    title: "Arabica Coffee - Sidamo, Yirgacheffe, Harar", 
    href: "#", 
    img: "/images/Arebica Coffee.jpg", 
    subtitle: "Coffee and Tea",
    description: "Fresh Arabica coffee from Sidamo, Yirgacheffe, and Harar regions. Rich aroma and superior flavor for coffee lovers and specialty cafes.",
    imgAlt: "Arabica coffee beans from Sidamo, Yirgacheffe, Harar"
  },
  { 
    title: "Specialty Coffee Beans", 
    href: "#", 
    img: "/images/Speciality Coffee.webp", 
    subtitle: "Coffee and Tea",
    description: "Premium specialty coffee beans sourced from Ethiopia. Handpicked for exceptional taste and aroma. Perfect for connoisseurs and cafes.",
    imgAlt: "Ethiopian specialty coffee beans"
  },
  
];

export const importProducts: Product[] = [
  // 1. Vehicles
  
  { 
    title: "Commercial Vehicles - Trucks and Vans", 
    href: "#", 
    img: "/images/Commercial Vehicles.jpg", 
    subtitle: "Vehicles", 
    description: "Durable commercial vehicles for logistics, transport, and business operations.", 
    imgAlt: "Commercial trucks and vans" 
  },
  { 
    title: "Special Purpose Vehicles", 
    href: "#", 
    img: "/images/Special Purpose Vehicles.webp", 
    subtitle: "Vehicles", 
    description: "Special purpose vehicles for construction, medical, and specialized needs.", 
    imgAlt: "Special purpose vehicles" 
  },

  // 3. Construction Equipment
  { 
    title: "Earthmoving Equipment", 
    href: "#", 
    img: "/images/Earthmoving Equipment.webp", 
    subtitle: "Construction Equipment", 
    description: "Heavy-duty earthmoving machines for construction projects.", 
    imgAlt: "Earthmoving construction equipment" 
  },
  { 
    title: "Material Handling Equipment", 
    href: "#", 
    img: "/images/Material Handling Equipment.jpg", 
    subtitle: "Construction Equipment", 
    description: "Equipment for efficient material handling in warehouses and construction.", 
    imgAlt: "Material handling equipment" 
  },
  { 
    title: "Concrete Equipment", 
    href: "#", 
    img: "/images/Concrete Equipment.jpg", 
    subtitle: "Construction Equipment", 
    description: "Concrete mixers, pumps, and related machinery for construction projects.", 
    imgAlt: "Concrete construction equipment" 
  },
  { 
    title: "Generators & Power Equipment", 
    href: "#", 
    img: "/images/Generators & Power Equipment.jpg", 
    subtitle: "Construction Equipment", 
    description: "Reliable generators and power equipment for industrial and construction use.", 
    imgAlt: "Generators and power equipment" 
  },
];
