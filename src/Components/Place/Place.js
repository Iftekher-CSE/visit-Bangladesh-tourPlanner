import "./Place.css";

import React from "react";

const Place = ({ place }) => {
    const { name, distance, visitCost, photo } = place;

    return (
        <div className="place">
            <img src={photo} alt="" />
            <h2>Place Name: {name}</h2>
            <h4>Distance From Capital: {distance}</h4>
            <p>
                You can visit this place per person per day cos will be
                approximately <strong>{visitCost}</strong> taka.
            </p>
            <button className="btn-select">Select This Place</button>
        </div>
    );
};

export default Place;
