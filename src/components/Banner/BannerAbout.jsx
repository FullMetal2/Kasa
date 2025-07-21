import React from "react";
import "./BannerAbout.scss";
import bannerImage from "../../assets/images/Image_source_2.png";

function Banner() {
  return (
    <section className="container-banner">
      <div
        className="bannerAbout"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
    </section>
  );
}

export default Banner;
