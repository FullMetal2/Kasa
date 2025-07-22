import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import Collapse from "../../components/Collapse/Collapse";

function Housing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div className="housing">
      <section>
        {logement && (
          <article>
            <img src={logement.cover} alt={logement.title} />
            <div>
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
              <ul>
                {logement.tags.map((tags) => (
                  <li key={tags}>{tags}</li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <div>{logement.host.name}</div>
                <div>
                  <img src={logement.host.picture} alt={logement.host.name} />
                </div>
              </div>
              <div>{logement.rating}</div>
            </div>
            <div>
              <Collapse title="Descrition">{logement.description}</Collapse>
              <Collapse title="Équipements">
                <ul>
                  {logement.equipments.map((equipments) => (
                    <li key={equipments}>{equipments}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}

export default Housing;
