import { ColumnDef } from "@tanstack/react-table";

export type HVACItem = {
  id: string;
  manufacturer: string;
  unit: string;
  type: string;
  quantity: number;
  estimatedCost: number;
  leadTime: string;
  inStock: string;
};

export const columns: ColumnDef<HVACItem>[] = [
  {
    accessorKey: "manufacturer",
    header: "Manufacturer",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "estimatedCost",
    header: "Estimated Cost",

  },
  {
    accessorKey: "leadTime",
    header: "Lead Time",
  },
  {
    accessorKey: "inStock",
    header: "In Stock",
  },
];
