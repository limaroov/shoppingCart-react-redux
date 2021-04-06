import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { REMOVE_FROM_CART, SET_COUNT } from "./redux-store/actions";
import "./CheckoutProduct.css";

function CheckoutProduct({
  image,
  title,
  id,
  description,
  count,
  category,
  price,
  removeFromCart,
  setCount,
}) {
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__image">
        <img src={image} alt={title} />
      </div>
      <div className="checkoutproduct__info">
        <h2 className="checkoutproduct__title">{title}</h2>
        <p className="checkoutproduct__category">{category}</p>
        <p className="checkoutproduct__description">
          <span>{description} .</span>
        </p>
        <h2> $ {price}</h2>
        <div className="checkoutproduct__add">
          <input
            className="checkoutproduct__count"
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(id, e.target.value)}
          />
          <Button
            className="checkoutproduct__removeBtn"
            onClick={() => removeFromCart(id)}
          >
            Remove from Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) =>
      dispatch({ type: REMOVE_FROM_CART, payload: { id } }),
    setCount: (id, count) =>
      dispatch({ type: SET_COUNT, payload: { id, count } }),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutProduct);
