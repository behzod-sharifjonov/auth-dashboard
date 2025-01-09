import React, { useContext } from "react";
import { Context } from "../../../App";

function OrderUiRow({ item, key }) {

  const {showOrderModal, setShowOrderModal}=  useContext(Context)

  return (
    <tr className={key} onClick={() => setShowOrderModal(true)}>
      <td className="tabel-custtomer-id">{item.customer_id.slice(0, 10)}</td>
      <td className="table-product-title">{item.product_name}</td>
      <td className="table-date">{item.date}</td>
      <td
        className={
          item.status === "to do"
            ? "status-to-do"
            : item.status === "doing"
            ? "status-doing"
            : item.status == "done"
            ? "status-done"
            : "status-lated"
        }
      >
        {item.status}
      </td>
      <td className="table-tracking">15372</td>
    </tr>
  );
}

export default OrderUiRow;
