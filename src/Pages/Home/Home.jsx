import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <Gallery />
    </div>
  );
}

export default Home;
