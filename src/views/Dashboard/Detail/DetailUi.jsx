import React from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import demo_image from '../../../assets/product_image.jpg'
import CloseBtn from "../../../components/CloseBtn/CloseBtn";

function DetailUi({ detail_data }) {

  const navigate = useNavigate()

  return (
    <div className="detail">
      <CloseBtn />
      <div className="detail-container">
        <div className="detail-image">
          <img src={demo_image} alt="" />
        </div>
        <div className="detail-description">

        </div>
      </div>
    </div>
  );
}

export default DetailUi;
