import React, { Suspense } from "react";
import "./Orders.css";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { FaDolly } from "react-icons/fa6";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import Loader from "../../../container/Loader/Loader";

function AllOrders() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="daliy-sales display-flex">
        <div className="daliy-sales-container">
          <div className="daliy-sales-card order-sales-card-1">
            <div className="daliy-sales-card-icon display-flex">
              <MdOutlineAutoAwesomeMotion />
            </div>
            <div className="daliy-sales-card-text">
              <h1>3</h1>
              <span>To Do products</span>
            </div>
          </div>
          <div className="daliy-sales-card order-sales-card-2">
            <div className="daliy-sales-card-icon display-flex">
              <FaDolly />
            </div>
            <div className="daliy-sales-card-text">
              <h1>3</h1>
              <span>Doing products</span>
            </div>
          </div>
          <div className="daliy-sales-card order-sales-card-3">
            <div className="daliy-sales-card-icon display-flex">
              <AiOutlineFileDone />
            </div>
            <div className="daliy-sales-card-text">
              <h1>2</h1>
              <span>Done products</span>
            </div>
          </div>
          <div className="daliy-sales-card order-sales-card-4">
            <div className="daliy-sales-card-icon display-flex">
              <MdWatchLater />
            </div>
            <div className="daliy-sales-card-text">
              <h1>2</h1>
              <span>Lated products</span>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default AllOrders;
