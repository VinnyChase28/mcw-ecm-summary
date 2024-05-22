"use client";

import { useParams } from "next/navigation";
import ProductList from "../components/product-list";
import React from "react";

const ProductPage: React.FC = () => {
  const params = useParams();
  const category = params?.category;

  return (
    <div>
      <ProductList category={category as string} />
    </div>
  );
};

export default ProductPage;
