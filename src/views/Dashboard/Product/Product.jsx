import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./Product.css";
import product_image from "../../../assets/product_image.jpg";
import product_image_2 from "../../../assets/product_image_2.jpg";
import { product_data } from "../../../data";

function Product() {
  return (
    <div className="product">
      <div className="product-card-container">
        {product_data.map((item, key) => (
          <ProductCard item_poduct_data={item} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Product;
