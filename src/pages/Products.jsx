import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import "./products.css";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/api";

export const loader = async () => {
  const products = await getAllProducts({});
  return { products };
};

const Products = () => {
  const { products } = useLoaderData();
  const navigateTo = useNavigate();

  return (
    <div className="products-page">
      {products.map((product) => (
        <button
          onClick={() => navigateTo(`/products/${product.id}`)}
          key={product.id}
        >
          <ProductCard product={product} />
        </button>
      ))}
    </div>
  );
};

export default Products;
