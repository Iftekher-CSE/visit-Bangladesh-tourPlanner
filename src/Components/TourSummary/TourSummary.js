import "./TourSummary.css";

import React, { useEffect, useState } from "react";
import Person from "../Person/Person";
import Break from "../Break/Break";

const TourSummary = ({ visitDays }) => {
    const [breakDays, setBreakDays] = useState(0);

    const onClickBreakHandler = selectedBreakDays => {
        localStorage.setItem("breakDays", selectedBreakDays);
        setBreakDays(selectedBreakDays);
    };
    useEffect(() => {
        const getBreakFromLS = localStorage.getItem("breakDays");
        setBreakDays(getBreakFromLS);
    }, []);

    return (
        <div className="tour-summary">
            <Person></Person>
            <h3>Add Break on Tour</h3>
            <Break onClickBreakHandler={onClickBreakHandler}></Break>
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
