import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Nav from "./Nav";
import { SET_PRODUCTS } from "./redux-store/actions";
import Banner from "./Banner";
import Products from "./Products";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const url = "https://fakestoreapi.com/products/";

function App({ setProducts }) {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        setProducts(response.map((item) => ({ ...item, count: 1 })));
      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, [setProducts]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nav home />
            <Banner />
            <Products />
          </Route>
          <Route path="/checkout">
            <Nav />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) =>
      dispatch({ type: SET_PRODUCTS, payload: { products: products } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
