import React from "react";
import "./OrdersPage.css";
import Orders from "../../../components/Orders/Order/Orders";
import AllOrders from "../../../components/Orders/Order/AllOrders";

function OrderPage() {
  return (
    <div className="order-page-container">
      <AllOrders />
      <Orders />
    </div>
  );
}

export default OrderPage;
