import React from "react";
import "./ProductCard.css";
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProductCard({item_poduct_data, key}) {

    const navigate = useNavigate()

  return (
    <div className="product-card" key={key} onClick={()=> navigate(`/dashboard/detail/${item_poduct_data.id}`)}>
      <div className="product-image">
        <img src={item_poduct_data.image} alt="" />
      </div>
      <div className="product-text">
        <h3>{item_poduct_data.brand.slice(0,19)}</h3> {/* 19 */}
        <span className="product-description">
          {item_poduct_data.description.slice(0,50)}
        </span>
        {/* 50 */}
        <div className="product-price-discount">
          <b className={item_poduct_data.price.length > 0 ? 'product-price' : 'none'}>{item_poduct_data.price}</b>
          <span className={item_poduct_data.discount.length > 0 ? 'product-discount' : 'none'}>{item_poduct_data.discount}</span>
        </div>
        <hr />
        <div className="product-additional">
          <div className="product-delivery">
            <FaTruck />
            {item_poduct_data.delivery}
          </div>
          <div className="product-gift">
            <FaGift />
            {item_poduct_data.gifts}
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
