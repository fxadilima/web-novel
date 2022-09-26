import React from "react";
import { useLocation } from "react-router-dom";

const People = () => {
    let query = useLocation().search;
    let usp = new URLSearchParams(query);
    return (
        <div className="w3-panel w3-padding-16">
            <h1>People</h1>
            <p>
                <strong>QueryString</strong><br/><strong>Id:</strong> {usp.get("id")}.<br/>
                <strong>Name:</strong> {usp.get("name")}.
            </p>
        </div>
    )
};

export default People;
