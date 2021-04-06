import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { ADD_TO_CART } from "./redux-store/actions";

function Product({
  image,
  title,
  id,
  price,
  description,
  category,
  count,
  addToCart,
}) {
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <p className="product__category">{category}</p>
        <p className="product__description">
          {description.length > 200 ? (
            <span>{description.substr(0, 200)} ...</span>
          ) : (
            <span>{description} .</span>
          )}
        </p>
        <h2> $ {price}</h2>
        <div className="product__add">
          <Button
            className="product__addBtn"
            onClick={() =>
              addToCart({
                title,
                image,
                id,
                price,
                description,
                category,
                count,
              })
            }
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) =>
      dispatch({ type: ADD_TO_CART, payload: { product } }),
  };
};

export default connect(null, mapDispatchToProps)(Product);
