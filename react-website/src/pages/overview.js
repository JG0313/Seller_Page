import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
    return (
        <div>
            <h1>
                OVERVIEW PAGE!!
            </h1>

            <div>
                <Link to="/edit-overview" className="btn btn-primary">hello</Link>
            </div>
        </div>
    );
};

export default Overview;