import React from "react";
import "./Orders.css";
import { HiChartBarSquare } from "react-icons/hi2";
import { SiGoogledocs } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function AllOrders() {
  return (
    <div className="daliy-sales display-flex">
      <div className="daliy-sales-container">
        <div className="daliy-sales-card order-sales-card-1">
          <div className="daliy-sales-card-icon display-flex">
            <HiChartBarSquare />
          </div>
          <div className="daliy-sales-card-text">
            <h1>3</h1>
            <span>To Do products</span>
          </div>
        </div>
        <div className="daliy-sales-card order-sales-card-2">
          <div className="daliy-sales-card-icon display-flex">
            <SiGoogledocs />
          </div>
          <div className="daliy-sales-card-text">
            <h1>3</h1>
            <span>Doing products</span>
          </div>
        </div>
        <div className="daliy-sales-card order-sales-card-3">
          <div className="daliy-sales-card-icon display-flex">
            <MdDiscount />
          </div>
          <div className="daliy-sales-card-text">
            <h1>2</h1>
            <span>Done products</span>
          </div>
        </div>
        <div className="daliy-sales-card order-sales-card-4">
          <div className="daliy-sales-card-icon display-flex">
            <FaUser />
          </div>
          <div className="daliy-sales-card-text">
            <h1>2</h1>
            <span>Lated products</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
