import "./TourSummary.css";

import React from "react";
import Person from "../Person/Person";

const TourSummary = () => {
    return (
        <div className="tour-summary">
            <Person></Person>
            <h2>Tour Plan</h2>
            <h4>Selected Place: {}</h4>
            <h4>Total Require: {} Days</h4>
        </div>
    );
};

export default TourSummary;
