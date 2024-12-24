import React from "react";
import "./ProductCard.css";
import product_image from "../../assets/product_image.jpg";
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product_image} alt="" />
      </div>
      <div className="product-text">
        <h3>Microsoft</h3> {/* 19 */}
        <span className="product-description">
          2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
        </span>
        {/* 60 */}
        <div className="product-price-discount">
          <b className="product-price">$1024.99+</b>
          <span className="product-discount">35% off</span>
        </div>
        <hr />
        <div className="product-additional">
          <div className="product-delivery">
            <FaTruck />
            Free shiping
          </div>
          <div className="product-gift">
            <FaGift />
            Free gifts
          </div>
        </div>
        <button>
            View Deal <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
