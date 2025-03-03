import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";


const Header = () => {
  return (
    <div className="header">
    <div className="header__logo">
      <a href="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </a>
    </div>
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <i className="header__searchIcon">
        <FaSearch />
      </i>
    </div>
    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo" />
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <div className="header__optionBasket">
        <i className="header__optionBasketIcon">
          <LuShoppingCart />
        </i>
        
      </div>
    </div>
  </div>
  )
}

export default Header
