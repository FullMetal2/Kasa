import React from "react";
import { useParams } from "react-router-dom";

import logementsData from "../../data/JSON.logements.json";

function Carrousel() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      {logement && <img src={logement.pictures} alt={logement.title} />}
    </div>
  );
}

export default Carrousel;
