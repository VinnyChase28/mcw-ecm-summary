import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTable } from "../../_components/table/data-table";
import { columns } from "../../_components/table/columns";

// Example dummy data
export const datasets = [
  {
    id: "building-heating",
    title: "Building Heating",
    data: [
      {
        id: "MTH-VRF-A",
        manufacturer: "Mitsubishi Electric",
        unit: "City Multi VRF Heat Pump",
        type: "Air",
        quantity: 1,
        estimatedCost: 30000,
        leadTime: "14 weeks",
        inStock: "Yes",
      },
      {
        id: "DKN-ALT-A",
        manufacturer: "Daikin",
        unit: "Altherma Heat Pump",
        type: "Water",
        quantity: 1,
        estimatedCost: 27000,
        leadTime: "10 weeks",
        inStock: "No",
      },
      {
        id: "TRN-HITR",
        manufacturer: "Trane",
        unit: "Heat Pump XR15",
        type: "Air",
        quantity: 1,
        estimatedCost: 25000,
        leadTime: "8 weeks",
        inStock: "Yes",
      },
    ],
  },
  {
    id: "building-cooling",
    title: "Building Cooling",
    data: [
      {
        id: "YRK-YVAA",
        manufacturer: "York",
        unit: "YVAA Air-Cooled Chiller",
        type: "Air",
        quantity: 1,
        estimatedCost: 35000,
        leadTime: "12 weeks",
        inStock: "Yes",
      },
      {
        id: "LNR-RPCT",
        manufacturer: "Lennox",
        unit: "Rooftop Package Unit",
        type: "Air",
        quantity: 1,
        estimatedCost: 28000,
        leadTime: "15 weeks",
        inStock: "No",
      },
      {
        id: "CARR-30RBA",
        manufacturer: "Carrier",
        unit: "AquaSnap Air-Cooled Chiller",
        type: "Air",
        quantity: 1,
        estimatedCost: 32000,
        leadTime: "10 weeks",
        inStock: "Yes",
      },
    ],
  },
  {
    id: "building-ventilation",
    title: "Building Ventilation",
    data: [
      {
        id: "GND-ERV1000",
        manufacturer: "Greenheck",
        unit: "Energy Recovery Ventilator",
        type: "Air",
        quantity: 1,
        estimatedCost: 18000,
        leadTime: "6 weeks",
        inStock: "Yes",
      },
      {
        id: "TRN-MERV",
        manufacturer: "Trane",
        unit: "Medium Efficiency Ventilator",
        type: "Air",
        quantity: 1,
        estimatedCost: 22000,
        leadTime: "8 weeks",
        inStock: "Yes",
      },
      {
        id: "LNR-HRV",
        manufacturer: "Lennox",
        unit: "Heat Recovery Ventilator",
        type: "Air",
        quantity: 1,
        estimatedCost: 21000,
        leadTime: "7 weeks",
        inStock: "No",
      },
    ],
  },
  {
    id: "terminal-units",
    title: "Terminal Units",
    data: [
      {
        id: "DKN-FCU",
        manufacturer: "Daikin",
        unit: "Fan Coil Unit",
        type: "Air",
        quantity: 1,
        estimatedCost: 7000,
        leadTime: "5 weeks",
        inStock: "Yes",
      },
      {
        id: "TRN-VAV",
        manufacturer: "Trane",
        unit: "Variable Air Volume Terminal",
        type: "Air",
        quantity: 1,
        estimatedCost: 9000,
        leadTime: "6 weeks",
        inStock: "No",
      },
      {
        id: "LNR-DOAS",
        manufacturer: "Lennox",
        unit: "Dedicated Outdoor Air System",
        type: "Air",
        quantity: 1,
        estimatedCost: 15000,
        leadTime: "10 weeks",
        inStock: "Yes",
      },
    ],
  },
  {
    id: "pumps",
    title: "Pumps",
    data: [
      {
        id: "GND-CIRP",
        manufacturer: "Grundfos",
        unit: "Circulator Pump",
        type: "Water",
        quantity: 1,
        estimatedCost: 4000,
        leadTime: "3 weeks",
        inStock: "Yes",
      },
      {
        id: "BLD-HPP",
        manufacturer: "Bell & Gossett",
        unit: "Hydronic Pump",
        type: "Water",
        quantity: 1,
        estimatedCost: 6000,
        leadTime: "4 weeks",
        inStock: "No",
      },
      {
        id: "WLO-ECP",
        manufacturer: "Wilo",
        unit: "End Suction Pump",
        type: "Water",
        quantity: 1,
        estimatedCost: 5500,
        leadTime: "5 weeks",
        inStock: "Yes",
      },
    ],
  },
];
const Products = () => {
  return (
    <Accordion type="single" collapsible>
      {datasets.map(({ id, title, data }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <DataTable columns={columns} data={data} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Products;
