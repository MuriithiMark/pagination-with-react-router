import React from "react";
import { getProductWithId } from "../services/api";
import { useLoaderData } from "react-router-dom";
import "./product.css";

export const loader = async ({ params }) => {
  const product = await getProductWithId(params.productId);
  if (!product) {
    throw Error("No such product");
  }
  return { product };
};
const Product = () => {
  const { product } = useLoaderData();

  return <div className="product">
    <div className="image-slide">
      <img src={product.thumbnail} alt={product.title} />
    </div>
    <div className="product-details">
      <span className="title">
        {product.title}
      </span>
      <span className="price">$ {product.price}</span>
      <span className="stock">{product.stock} in stock!</span>
    </div>
  </div>;
};

export default Product;
