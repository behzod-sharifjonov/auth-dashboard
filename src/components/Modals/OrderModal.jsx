import React, { useContext } from "react";
import "./Modal.css";
import { Context } from "../../App";
import { IoClose } from "react-icons/io5";
import product_image from "../../assets/product_image.jpg";

function OrderModal() {
  const { showOrderModal, setShowOrderModal } = useContext(Context);

  return (
    <div className="modal">
      <div className="modal-container">
        <button
          className="close-modal"
          onClick={() => setShowOrderModal(false)}
        >
          <IoClose />
        </button>
        <div className="modal-image">
          <img src={product_image} alt="" />
        </div>
        <div className="modal-text">
          <div className="modal-line">
            <b>Product Id:</b>
            <span>7f861192-c</span>
          </div>
          <div className="modal-line">
            <b>Product Title:</b>
            <span>Microphone</span>
          </div>
          <div className="modal-line">
            <b>Date:</b>
            <span>15 December 2024</span>
          </div>
          <div className="modal-line">
            <b>Status:</b>
            <span
            //   className={
            //     item.status === "to do"
            //       ? "status-to-do"
            //       : item.status === "doing"
            //       ? "status-doing"
            //       : item.status == "done"
            //       ? "status-done"
            //       : "status-lated"
            //   }
            >
              to do
            </span>
          </div>
          <div className="modal-line">
            <b>Trackting:</b>
            <span>15372</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
