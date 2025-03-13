import React from "react";
import "../Header/Header.css";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>
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
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* <a href="/login"></a>
            <div className="header__option">
              <span className="header__optionLineOne">Sign</span>
              <span className="header__optionLineTwo">In</span>
            </div> */}
        <Link to={"/"}>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__optionBasket">
            <LuShoppingCart size={35} />
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
