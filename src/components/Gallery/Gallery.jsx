import React from "react";
import logementsData from "../../data/JSON.logements.json";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="container">
      <section className="container-gallery">
        {logementsData.map((logement) => (
          <div key={logement.id} className="card">
            <a href="./Housing">
              <div className="title">
                <img src={logement.cover} alt={logement.title} />

                <h3>{logement.title}</h3>
              </div>
            </a>
          </div>
        ))}
        ;
      </section>
    </div>
  );
}

export default Gallery;
