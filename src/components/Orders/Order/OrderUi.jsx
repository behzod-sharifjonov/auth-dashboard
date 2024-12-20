import React from "react";
import OrderUiRow from "./OrderUiRow";
import './Orders.css'

function OrderUi({ item_data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coustemer id</th>
            <th>Poduct</th>
            <th>Date</th>
            <th>Status</th>
            <th>Trackting</th>
          </tr>
        </thead>
        <tbody>
          {item_data.map((item) => (
            <OrderUiRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderUi;
