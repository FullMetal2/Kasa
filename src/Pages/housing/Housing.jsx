import React from "react";
import { useParams } from "react-router-dom";

function housing() {
    const {id} = useParams();

        return (
            <div className="housing">
                <h1>Détail du logement</h1>
                <p>Id du logement : {id}</p>
                {/* Ici on intègrera plus tard les données du logement */}
            </div>
        );
}

export default housing;