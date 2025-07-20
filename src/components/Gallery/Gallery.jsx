import React from "react";
import { Link } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="container">
      <section className="container-gallery">
        {logementsData.map((logement) => (
          <article key={logement.id} className="card">
            <Link to={`/housing/${logement.id}`}>
              <figure>
                <img src={logement.cover} alt={logement.title} />
                <figcaption>{logement.title}</figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Gallery;
