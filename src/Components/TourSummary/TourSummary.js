import "./TourSummary.css";

import React, { useState } from "react";
import Person from "../Person/Person";
import Break from "../Break/Break";

const TourSummary = ({ visitDays }) => {
    const [breakDays, setBreakDays] = useState(0);

    return (
        <div className="tour-summary">
            <Person></Person>
            <h3>Add Break on Tour</h3>
            <Break></Break>
            <h3>Tour Plan</h3>
            <h4>Total Require: {visitDays} Days</h4>
            <h4>Break Added: {breakDays} Days</h4>
            <div className="btn-div">
                <button className="btn-execute">Execute Tout Plan</button>
            </div>
        </div>
    );
};

export default TourSummary;
