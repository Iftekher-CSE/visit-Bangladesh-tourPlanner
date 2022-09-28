import React from "react";
import Navbar from "../Navbar/Navbar";
import Places from "../Places/Places";
import TourSummary from "../TourSummary/TourSummary";
import "./TourPlan.css";

const TourPlan = () => {
    return (
        <div>
            <div className="tour-plan">
                <div>
                    <Navbar></Navbar>
                    <h3>Select Place and Make Tour Plan</h3>
                    <Places></Places>
                </div>
                <div className="tour-summary">
                    <TourSummary></TourSummary>
                </div>
            </div>
        </div>
    );
};

export default TourPlan;
