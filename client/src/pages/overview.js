import React from "react";

const Overview = () => {
    return (
        <div>
            <h1>
                OVERVIEW PAGE!!
            </h1>
            <form action="/edit-overview">
                <input type="submit" value="Edit Page" />
            </form>
        </div>
    );
};

export default Overview;