import React from "react";

const EditOverview = () => {
    return (
        <div>
            <h1>
                Edit Profile:
            </h1>
            <form action="/edit-overview/" method="post">
                <label for="seller_name">Enter name: </label>
                <input
                    id="seller_name"
                    type="text"
                    name="name_field"
                    value="Default Seller." />
                <input type="submit" value="OK" />
            </form>

        </div>
    );
};

export default EditOverview;