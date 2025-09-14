import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/Error404");
    }
  }, [logement, navigate]);

  return (
    <div className="gallery-housing">
      <section>
        {logement && (
          <article className="gap">
            <Carrousel />
            <div className="grid">
              <div className="left">
                <h1 className="title">{logement.title}</h1>
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
