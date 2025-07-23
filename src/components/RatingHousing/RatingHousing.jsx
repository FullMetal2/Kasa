import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";

function RatingHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      {logement && (
        <article>
          <div>{logement.rating}</div>
        </article>
      )}
    </div>
  );
}
export default RatingHousing;
