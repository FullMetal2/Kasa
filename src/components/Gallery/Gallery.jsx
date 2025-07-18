import React from "react";
import logementsData from '../../data/JSON.logements.json';
import './Gallery.scss';

function Gallery () {
    return (
        <section className="container-gallery">
            {logementsData.map((logement) =>
                <div key={logement.id} className="card">
                    <img src={logement.cover} alt={logement.title}/>
                    <h3>{logement.title}</h3>     
                </div>
            )};
        </section>
    );
};

export default Gallery;