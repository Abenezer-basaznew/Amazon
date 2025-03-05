import React from "react";
import "./LowerHeader.css";
import { FiAlignJustify } from "react-icons/fi";

const LowerHeader = () => {
  return (
    <div className="LowerHeader__div">
      <ul className="LowerHeader__Ul">
        <li>
          <i>
            <FiAlignJustify />
          </i>
          <p>ALL</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer service</li>
        <li>Register</li>
        <li>GIft card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
