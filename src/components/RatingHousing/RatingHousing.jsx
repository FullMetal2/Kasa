import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./RatingHousing.scss";

function RatingHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);
  let star = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div>
      {logement && (
        <article className="container-star">
          {star.map((i) => (
            <span
              key={i}
              className={i < Number(logement.rating) ? "active" : ""}
            >
              <i className="fa-solid fa-star"></i>
            </span>
          ))}
        </article>
      )}
    </div>
  );
}
export default RatingHousing;
