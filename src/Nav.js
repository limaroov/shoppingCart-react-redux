import React, { useEffect, useState } from "react";
import "./Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import { FILTER_PRODUCTS } from "./redux-store/actions";
import { Input } from "@material-ui/core/";

function Nav({ categories, filterProducts, cart, home }) {
  const [background, setBackground] = useState("");
  const [showSearch, setShowSeacrh] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (home) {
        if (window.scrollY > 600) {
          setBackground("rgba(84, 84, 253, 0.904)");
          setShowSeacrh("translateY(0)");
        } else {
          setBackground("#333");
          setShowSeacrh("translateY(-150%)");
        }
      } else {
        setBackground("#333");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <nav className="nav" style={{ backgroundColor: background }}>
      <div className="nav__logoTitle">
        <Link className="nav__header" to="/">
          <ShoppingCartIcon className="nav__logo" />
          <h1 className="nav__title">Redux ShoppingCart</h1>
        </Link>
        <div
          className="nav__searchCategories"
          style={{ transform: showSearch }}
        >
          {home && (
            <div className="nav__search">
              <Select
                className="nav_categories"
                onChange={(e) => filterProducts("CATEGORY", e.target.value)}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem className="nav__category" value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
              <Input
                type="text"
                placeholder="Search for Products"
                onChange={(e) => filterProducts("SEARCH", e.target.value)}
              />
              <SearchIcon className="nav__searchIcon" />
            </div>
          )}
        </div>

        <Link className="nav__basketInfo" to="/checkout">
          <ShoppingBasketIcon className="nav__basket" />
          <p>{cart.length}</p>
        </Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (filterType, filter) =>
      dispatch({ type: FILTER_PRODUCTS, payload: { filterType, filter } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
