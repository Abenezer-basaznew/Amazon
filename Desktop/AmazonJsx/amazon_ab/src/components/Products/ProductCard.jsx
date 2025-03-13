import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price, description } = product;

  return (
    <div className={classes.card__container}>
      <a href="/">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>
          {title}
        </h3>
        <div className={classes.rating}>
          <Rating value={5} precision={0.1} />
          {/* price */}
          <small>
            {rating.count}
          </small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <div>
          <button className={classes.button}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
