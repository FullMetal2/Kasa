import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import Collapse from "../../components/Collapse/Collapse";
import GalleryHousing from "../../components/GalleryHousing/GalleryHousing";
import TagsHousing from "../../components/TagsHousing/TagsHousing";
import HostHousing from "../../components/HostHousing/HostHousing";
import RatingHousing from "../../components/RatingHousing/RatingHousing";
import EquipmentsHousing from "../../components/EquipmentsHousing/EquipmentsHousing";

function Housing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  return (
    <div className="gallery-housing">
      <section>
        {logement && (
          <article>
            <GalleryHousing />
            <div>
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
              <TagsHousing />
            </div>
            <div>
              <div>
                <HostHousing />
              </div>
              <RatingHousing />
            </div>
            <div>
              <Collapse title="Descrition">{logement.description}</Collapse>
              <Collapse title="Équipements">
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
