import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import Collapse from "../../components/Collapse/Collapse";
import TagsHousing from "../../components/TagsHousing/TagsHousing";
import HostHousing from "../../components/HostHousing/HostHousing";
import RatingHousing from "../../components/RatingHousing/RatingHousing";
import EquipmentsHousing from "../../components/EquipmentsHousing/EquipmentsHousing";
import Carrousel from "../../components/Carrousel/Carrousel";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div className="gallery-housing">
      <section>
        {logement && (
          <article className="gap">
            <Carrousel />
            <div className="grid">
              <div className="left">
                <h2 className="title">{logement.title}</h2>
                <p className="location">{logement.location}</p>
                <TagsHousing />
              </div>
              <div className="right">
                <HostHousing />

                <RatingHousing className="rating" />
              </div>
            </div>
            <div className="collapse-housing">
              <Collapse title="Descrition" className="description">
                {logement.description}
              </Collapse>
              <Collapse title="Équipements" className="equipments">
                <EquipmentsHousing />
              </Collapse>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}

export default Housing;
