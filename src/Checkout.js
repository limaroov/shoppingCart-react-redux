import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout({ cart }) {
  return (
    <div className="checkout">
      {cart.length !== 0 ? (
        <div className="checkout__left">
          {cart.map((item) => {
            return <CheckoutProduct key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <div className="checkout__left">
          <h1>Your Cart is Currently Empty</h1>
          <p>
            Please navigate back to Home page so you can add some products to
            your Cart.
          </p>
        </div>
      )}
      <div className="checkout__right">
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
