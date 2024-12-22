import React from "react";
import "./Recent.css";
import RecentRow from "./RecentRow";

function Recentui({ item_data }) {
  return (
    <div className="recent-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {item_data.map((item) => (
            <RecentRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recentui;
