"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";
import Nav from "./_components/navigation/nav"; // This is your sidebar

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="w-1/4">
        <Nav /> {/* Sidebar (Nav component) */}
      </div>
      <div className="container mx-auto w-3/4 py-10">
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
      </div>
    </main>
  );
}
