import React from "react";
import Header from "../../components/Header/Header";
import LowerHeader from "../LowerHeader/LowerHeader";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      <LowerHeader />       
      {children}
    </div>
  );
}

export default LayOut;
