import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { connect } from "react-redux";
import { CLEAR_CART } from "./redux-store/actions";
import { getCartTotal } from "./redux-store/reducer";

function Subtotal({ cart, clearCart }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({cart.length} items): <strong>{` ${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal__ProceedBtn"
        disabled={cart.length > 0 ? false : true}
      >
        Proceed to checkout
      </button>
      <button
        className="subtotal__ClearBasketBtn"
        disabled={cart.length > 0 ? false : true}
        onClick={clearCart}
      >
        Clear Bakset
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch({ type: CLEAR_CART }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Subtotal);
