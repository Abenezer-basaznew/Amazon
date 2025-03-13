import React from "react";
import LayOut from "../../components/LayOut/LayOut";
// import Header from "../../components/Header/Header";
// import LowerHeader from "../../components/LowerHeader/LowerHeader";
import CarouselEffect from "../../components/CarouselEffect/CarouselEffect";
import Category from "../../components/Category/Category";
import Product_main from "../../components/Products/Product_main";

function Landing() {
  return (
    
      <LayOut>

        {/* <Header /> */}
       
        <CarouselEffect />
        <Category />
        <Product_main />

      </LayOut>
    
  );
}

export default Landing;
