import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/JSON.logements.json";

function TagsHousing() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);
  return (
    <div>
      {logement && (
        <article>
          <ul>
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
