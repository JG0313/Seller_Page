import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
    return (
        <div>
            <h1>
                This is the Partners Page!!
            </h1>
            <div>
            <Link to="/getUserByID/660322de66ad374e72b6a49e" className="btn btn-primary">see data</Link>
            </div>
        </div>
    );
};

export default Partners;