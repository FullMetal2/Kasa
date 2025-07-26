import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./EquipmentsHousing.scss";

function EquipmentsHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      {logement && (
        <article>
          <ul className="style-none">
            {logement.equipments.map((equipments) => (
              <li key={equipments}>{equipments}</li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
}
export default EquipmentsHousing;
