import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./HostHousing.scss";

function HostHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      {logement && (
        <article className="container-host">
          <div className="host">{logement.host.name}</div>
          <div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-cover"
            />
          </div>
        </article>
      )}
    </div>
  );
}
export default HostHousing;
