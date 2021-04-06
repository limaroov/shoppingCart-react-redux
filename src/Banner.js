import React from "react";
import "./Banner.css";
import img from "./images/Online shopping.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1 className="banner__infoTitle">Welcome To Our Store</h1>
        <p className="banner__infoParagraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quam
          autem dolore! Reiciendis rerum aliquid, ut nam quisquam quos quidem
          tempore omnis vero, sint deleniti aut a? Modi, pariatur quasi?
        </p>
      </div>
      <img src={img} className="banner__logo" alt="" />
    </div>
  );
}

export default Banner;
