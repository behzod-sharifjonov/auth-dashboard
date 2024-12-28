import React, { useState } from "react";
import CloseBtn from "../../../components/CloseBtn/CloseBtn";
import "./AddProduct.css";
import imageButton from "../../../assets/Buttons.jpg";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [imageSrc, setImageSrc] = useState(null);
  const [activeButton, setActiveButton] = useState("uzs");
  const [deliveryButton, setDeliveryButton] = useState("don't have");
  const [discountButton, setDiscountButton] = useState("don't have");
  const [giftsButton, setGiftsButton] = useState("don't have");
  const navigate = useNavigate();

  const addProductHandler = (e) => {
    e.preventDefault();

    const productData = new FormData(e.target);
    const {
      product_brand,
      product_image,
      product_price,
      product_discount,
      product_description,
    } = Object.fromEntries(productData.entries());

    const newProductData = {
        product_brand,
        product_image,
        product_price,
        product_discount,
        product_description,
        product_gifts: giftsButton,
        product_delivery: deliveryButton
    }

    console.log(newProductData)

  };

  console.log(deliveryButton, discountButton, giftsButton);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="add-product">
      <CloseBtn />
      <div className="add-product-container">
        <h3>Add Product</h3>
        <form onSubmit={addProductHandler}>
          <div className="column">
            <label htmlFor="product-brand">Product Brand</label>
            <input
              type="text"
              id="product-brand"
              placeholder="Enter brand name"
              required
              name="product_brand"
            />
          </div>

          <div className="column">
            <label htmlFor="">Product Image</label>
            <div className="image-upload" onClick={handleImageClick}>
              <img
                src={imageSrc || imageButton}
                alt="Click to upload"
                style={{ width: "193", height: "96px" }}
              />

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
                required
                name="product_image"
              />
            </div>
          </div>

          <div className="column">
            <label htmlFor="product-price">Product Price</label>
            <div className="product-price-input product-btns">
              <input
                type="text"
                id="product-price"
                placeholder="Enter product price"
                required
                name="product_price"
              />

              <button
                type="button"
                className={activeButton === "uzs" ? "active" : ""}
                onClick={() => setActiveButton("uzs")}
              >
                UZS
              </button>
              <button
                type="button"
                className={activeButton === "usd" ? "active" : ""}
                onClick={() => setActiveButton("usd")}
              >
                USD
              </button>
            </div>
          </div>

          <div className="product-additional">
            <div className="product-discount-form column">
              <label htmlFor="discount">Product Delivery</label>
              <div className="product-btns">
                <button
                  type="button"
                  className={deliveryButton === "don't have" ? "active" : ""}
                  onClick={() => setDeliveryButton("don't have")}
                >
                  Don't have
                </button>
                <button
                  type="button"
                  className={deliveryButton === "free delivery" ? "active" : ""}
                  onClick={() => setDeliveryButton("free delivery")}
                >
                  Free Delivery
                </button>
                <button
                  type="button"
                  className={deliveryButton === "have" ? "active" : ""}
                  onClick={() => setDeliveryButton("have")}
                >
                  Have
                </button>
              </div>
            </div>
            <div className="product-discount-form column">
              <label htmlFor="product-discount">Product Discount</label>
              <div className="product-btns">
                <button
                  type="button"
                  className={discountButton === "don't have" ? "active" : ""}
                  onClick={() => setDiscountButton("don't have")}
                >
                  Don't have
                </button>
                <button
                  type="button"
                  className={discountButton === "have" ? "active" : ""}
                  onClick={() => setDiscountButton("have")}
                >
                  Have
                </button>
              </div>
            </div>
            <div className="product-discoun-form column">
              <label htmlFor="product-gifts">Product Gifts</label>
              <div className="product-btns">
                <button
                  type="button"
                  className={giftsButton === "don't have" ? "active" : ""}
                  onClick={() => setGiftsButton("don't have")}
                >
                  Don't have
                </button>
                <button
                  type="button"
                  className={giftsButton === "have" ? "active" : ""}
                  onClick={() => setGiftsButton("have")}
                >
                  Have
                </button>
              </div>
            </div>
          </div>

          <div className="column">
            <label htmlFor="product-description">Product Description</label>
            <textarea
              id="product-description"
              placeholder="Enter product description"
              minLength={100}
              required
              name="product_description"
            ></textarea>
          </div>

          <div
            className={`${
              discountButton == "have" ? "active-btn" : "active-none"
            } column`}
          >
            <label htmlFor="product-discount-price">
              Product discount price
            </label>
            <input
              placeholder="Please enter the percentage discount."
              type="text"
              name="product_discount"
            />
          </div>
          <div className="poduct-finished-btn">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
