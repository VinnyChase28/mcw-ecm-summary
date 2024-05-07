import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

// Example dummy data
const datasets = [
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    data: [
      {
        id: "2345HHYJ",
        manufacturer: "Mitsubishi",
        unit: "City Multi",
        type: "Air",
        quantity: 1,
        estimatedCost: 22500,
        leadTime: "20 weeks",
        inStock: "Yes",
      },
      {
        id: "235GGHGH3",
        manufacturer: "Daikin",
        unit: "DFH Com",
        type: "Water",
        quantity: 1,
        estimatedCost: 23700,
        leadTime: "13 weeks",
        inStock: "Yes",
      },
      {
        id: "234FSGF",
        manufacturer: "Trane",
        unit: "Axiom",
        type: "Air",
        quantity: 1,
        estimatedCost: 25500,
        leadTime: "3 weeks",
        inStock: "Yes",
      },
    ],
  },
  {
    id: "thermostats",
    title: "Programmable Thermostats",
    data: [
      // Add your specific data here
    ],
  },
  {
    id: "cooling-systems",
    title: "Cooling Systems",
    data: [
      // Add your specific data here
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
