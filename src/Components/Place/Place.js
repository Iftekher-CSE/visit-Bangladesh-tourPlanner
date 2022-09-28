import "./Place.css";

import React from "react";

const Place = ({ place }) => {
    const { name, distance, visitDuration, photo } = place;

    return (
        <div className="place">
            <img src={photo} alt="" />
            <div className="place-items">
                <h2>Visit : {name}</h2>
                <h4>Distance From Capital: {distance}</h4>
                <p>
                    Visit this place within<strong> {visitDuration} </strong>
                    days.
                </p>
            </div>
            <button className="btn-select">Visit This Place</button>
        </div>
    );
};

export default Place;
