import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return <div>
      <header className="header__container">
        <div className="header__logo">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </div>
        <div className="header_location">
          <span />
          <span>Ethiopia</span>
        </div>
        <div className="header__search">
          <button>
            all <i className="down_arrow">
              <SlArrowDown />
            </i>
          </button>
        </div>
        <div className="header_products">
          <div className="search_input">
            <input type="text" name="search_product" value="search_product" />
          </div>
          <div className="search_container_icon">
            <i className="search_icon">
              <FaSearch />
            </i>
          </div>
        </div>
        <div className="header_counter">
          <i className="america">
            <GiUsaFlag />
          </i>
          <span>EN</span>
          <i className="down_arrow2">
            <SlArrowDown />
          </i>
        </div>
        <div className="header__option">
          <span>sign in</span>
          <span>account & list</span>
        </div>
        <div className="header__option2">
          <span>returns</span>
          <span>& orders</span>
        </div>

        <div className="header_cart_icon">
          <i className="cart">
            <FiShoppingCart />
          </i>
        </div>
      </header>
    </div>;
};

export default Header;
