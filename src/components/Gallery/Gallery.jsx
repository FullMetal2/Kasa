import React from "react";
import { Link } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="container">
      <section className="container-gallery">
        {logementsData.map((logement) => (
          <div key={logement.id} className="card">
            <Link to={`/housing/${logement.id}`}>
              <div className="title">
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Gallery;
