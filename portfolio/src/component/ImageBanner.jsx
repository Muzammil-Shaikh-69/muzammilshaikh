import React from "react";
import "./ImageBanner.css";
import profile from "../images/muzammil-shaikh.jpeg";

const ImageBanner = () => {
  return (
    <div className="image-banner">
      <img src={profile} alt="Profile" className="banner-img" />
    </div>
  );
};

export default ImageBanner;
