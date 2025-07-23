import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import logementsData from "../../data/JSON.logements.json";
import "./Carrousel.scss";
import vector1 from "../../assets/logo/Vector(1).png";
import vector2 from "../../assets/logo/vector2.png";

function Carrousel() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);
  const [index, setIndex] = useState(0);

  function HandClik() {
    if (index < logement.pictures.length - 1) setIndex(index + 1);
    else setIndex(0);
  }
  function HandPrevious() {
    if (index === 0) setIndex(logement.pictures.length - 1);
    else setIndex(index - 1);
  }
  let pictures = logement.pictures[index];

  return (
    <div className="gallery-housing">
      <section>
        {logement && (
          <article className="container-cover">
            <div className="carrousel">
              <img
                src={pictures}
                alt={logement.title}
                className="img-carrousel"
              />
              <span className="image-counter">
                {index + 1} / {logement.pictures.length}
              </span>
            </div>
            <div className="vector1">
              <img
                src={vector1}
                alt="Flèche suivante"
                onClick={HandClik}
                className="vectorsize"
              />
            </div>
            <div className="vector2">
              <img
                src={vector2}
                alt="Flèche précédente"
                onClick={HandPrevious}
                className="vectorsize"
              />
            </div>
          </article>
        )}
      </section>
    </div>
  );
}

export default Carrousel;
