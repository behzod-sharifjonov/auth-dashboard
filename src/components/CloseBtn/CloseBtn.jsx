import React from "react";
import './CloseBtn.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CloseBtn() {

    const navigate = useNavigate()

  return (
    <div className="detail-close">
      <FaArrowLeft className="detail-close-btn" onClick={() => navigate(-1)} />
      <span>Back to previous page </span>
    </div>
  );
}

export default CloseBtn;
