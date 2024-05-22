// Define the structure for the product specifications
export interface ProductSpecs {
  degreeOfEfficiency: string;
  flowRate: string;
  powerConsumption: string;
  retailPrice: string;
}

// Define the structure for a product
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specs: ProductSpecs;
}

// Sample product data (this should be replaced with actual data fetching in a real application)
export const products: Product[] = [
  {
    id: "1",
    name: "City Multi VRF Heat Pump",
    category: "building-heating",
    description: "A high-efficiency heat pump suitable for large buildings.",
    imageUrl: "/hvac1.jpg",
    specs: {
      degreeOfEfficiency: "85%",
      flowRate: "N/A",
      powerConsumption: "2000 watts",
      retailPrice: "$30,000.00",
    },
  },
  {
    id: "2",
    name: "Altherma Heat Pump",
    category: "building-heating",
    description: "A water-based heat pump with excellent performance.",
    imageUrl: "/hvac2.jpg",
    specs: {
      degreeOfEfficiency: "87%",
      flowRate: "N/A",
      powerConsumption: "1800 watts",
      retailPrice: "$27,000.00",
    },
  },
  {
    id: "3",
    name: "Heat Pump XR15",
    category: "building-heating",
    description: "An air-based heat pump ideal for commercial use.",
    imageUrl: "/hvac3.jpg",
    specs: {
      degreeOfEfficiency: "90%",
      flowRate: "N/A",
      powerConsumption: "2200 watts",
      retailPrice: "$25,000.00",
    },
  },
  {
    id: "4",
    name: "YVAA Air-Cooled Chiller",
    category: "building-cooling",
    description: "An efficient air-cooled chiller for building cooling.",
    imageUrl: "/hvac1.jpg",
    specs: {
      degreeOfEfficiency: "88%",
      flowRate: "N/A",
      powerConsumption: "2500 watts",
      retailPrice: "$35,000.00",
    },
  },
  {
    id: "5",
    name: "Rooftop Package Unit",
    category: "building-cooling",
    description: "A comprehensive cooling solution for rooftops.",
    imageUrl: "/hvac2.jpg",
    specs: {
      degreeOfEfficiency: "86%",
      flowRate: "N/A",
      powerConsumption: "2300 watts",
      retailPrice: "$28,000.00",
    },
  },
  {
    id: "6",
    name: "AquaSnap Air-Cooled Chiller",
    category: "building-cooling",
    description: "A high-performance chiller for building cooling.",
    imageUrl: "/hvac3.jpg",
    specs: {
      degreeOfEfficiency: "90%",
      flowRate: "N/A",
      powerConsumption: "2400 watts",
      retailPrice: "$32,000.00",
    },
  },
  {
    id: "7",
    name: "Energy Recovery Ventilator",
    category: "building-ventilation",
    description: "An energy-efficient ventilator for large buildings.",
    imageUrl: "/hvac1.jpg",
    specs: {
      degreeOfEfficiency: "85%",
      flowRate: "5000 m3/h",
      powerConsumption: "1500 watts",
      retailPrice: "$18,000.00",
    },
  },
  {
    id: "8",
    name: "Medium Efficiency Ventilator",
    category: "building-ventilation",
    description: "A medium efficiency ventilator for various applications.",
    imageUrl: "/hvac2.jpg",
    specs: {
      degreeOfEfficiency: "87%",
      flowRate: "4500 m3/h",
      powerConsumption: "1600 watts",
      retailPrice: "$22,000.00",
    },
  },
  {
    id: "9",
    name: "Heat Recovery Ventilator",
    category: "building-ventilation",
    description: "A heat recovery ventilator for optimal energy savings.",
    imageUrl: "/hvac3.jpg",
    specs: {
      degreeOfEfficiency: "88%",
      flowRate: "4800 m3/h",
      powerConsumption: "1400 watts",
      retailPrice: "$21,000.00",
    },
  },
  {
    id: "10",
    name: "Fan Coil Unit",
    category: "terminal-units",
    description: "A fan coil unit for efficient climate control.",
    imageUrl: "/hvac1.jpg",
    specs: {
      degreeOfEfficiency: "90%",
      flowRate: "N/A",
      powerConsumption: "1200 watts",
      retailPrice: "$7,000.00",
    },
  },
  {
    id: "11",
    name: "Variable Air Volume Terminal",
    category: "terminal-units",
    description: "A variable air volume terminal for precise air control.",
    imageUrl: "/hvac2.jpg",
    specs: {
      degreeOfEfficiency: "88%",
      flowRate: "N/A",
      powerConsumption: "1300 watts",
      retailPrice: "$9,000.00",
    },
  },
  {
    id: "12",
    name: "Dedicated Outdoor Air System",
    category: "terminal-units",
    description: "A dedicated outdoor air system for fresh air supply.",
    imageUrl: "/hvac3.jpg",
    specs: {
      degreeOfEfficiency: "85%",
      flowRate: "N/A",
      powerConsumption: "1400 watts",
      retailPrice: "$15,000.00",
    },
  },
  {
    id: "13",
    name: "Circulator Pump",
    category: "pumps",
    description: "A circulator pump for water-based heating systems.",
    imageUrl: "/hvac1.jpg",
    specs: {
      degreeOfEfficiency: "92%",
      flowRate: "2000 m3/h",
      powerConsumption: "500 watts",
      retailPrice: "$4,000.00",
    },
  },
  {
    id: "14",
    name: "Hydronic Pump",
    category: "pumps",
    description: "A hydronic pump for efficient water circulation.",
    imageUrl: "/hvac2.jpg",
    specs: {
      degreeOfEfficiency: "90%",
      flowRate: "1800 m3/h",
      powerConsumption: "600 watts",
      retailPrice: "$6,000.00",
    },
  },
  {
    id: "15",
    name: "End Suction Pump",
    category: "pumps",
    description: "An end suction pump for versatile water applications.",
    imageUrl: "/hvac3.jpg",
    specs: {
      degreeOfEfficiency: "88%",
      flowRate: "2200 m3/h",
      powerConsumption: "550 watts",
      retailPrice: "$5,500.00",
    },
  },
];
