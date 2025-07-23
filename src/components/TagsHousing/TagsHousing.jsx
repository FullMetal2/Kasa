import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";
import "./TagsHousing.scss";

function TagsHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);
  return (
    <div>
      {logement && (
        <article>
          <ul className="tags">
            {logement.tags.map((tags) => (
              <li key={tags}>{tags}</li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
}
export default TagsHousing;
