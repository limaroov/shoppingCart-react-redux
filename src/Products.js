import React, { useEffect, useState } from "react";
import "./Products.css";
import { connect } from "react-redux";
import Product from "./Product";
import { SET_CATEGORIES } from "./redux-store/actions";

function Products({ products, setCategories, category, search }) {
  const [productsFE, setProductsFE] = useState([]);

  useEffect(() => {
    setProductsFE(products);
    setCategories([
      ...new Set(products.map((product) => product.category)),
      "Reset",
    ]);
    if (category) {
      if (category !== "Reset") {
        let newProducts = products.filter(
          (product) => product.category === category
        );
        setProductsFE(newProducts);
      } else {
        setProductsFE(products);
      }
    }
    if (search) {
      let newProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setProductsFE(newProducts);
    }
  }, [products, category, search, setCategories]);

  return (
    <div className="products">
      <div className="products__products">
        {productsFE?.map((product) => {
          return <Product key={product.title} {...product} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    category: state.category,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) =>
      dispatch({ type: SET_CATEGORIES, payload: { categories: categories } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
