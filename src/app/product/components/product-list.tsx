import React from "react";
import { Product, products } from "../data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductListProps {
  category?: string;
}

const getEfficiencyColor = (efficiency: string) => {
  const efficiencyValue = parseFloat(efficiency.replace("%", ""));
  if (efficiencyValue >= 90) {
    return "bg-green-500"; // Best efficiency
  } else if (efficiencyValue >= 80) {
    return "bg-yellow-500"; // Less efficient
  } else {
    return "bg-red-500"; // Least efficient
  }
};

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div>
      <h1>{category && `/ product / ${category}`}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <Card key={product.id} className="product-card p-4">
            <Image
              src={`${product.imageUrl}`}
              alt={product.name}
              width={500}
              height={500}
              className="h-auto w-full"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Retail Price:</strong> {product.specs.retailPrice}
            </p>
            <strong>Degree of Efficiency:</strong>{" "}
            <Badge
              variant="outline"
              className={`p-2 text-white ${getEfficiencyColor(
                product.specs.degreeOfEfficiency,
              )}`}
            >
              {product.specs.degreeOfEfficiency}
            </Badge>
            <p>
              <strong>Flow Rate:</strong> {product.specs.flowRate}
            </p>
            <p>
              <strong>Power Consumption:</strong>{" "}
              {product.specs.powerConsumption}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
