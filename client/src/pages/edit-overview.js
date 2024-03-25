import React from "react";
import '../styles/edit-overview.css';

function UpdateSellerDisplayPicture()
{
    let image = document.getElementById("seller_picture_display");
    let input = document.getElementById("seller_picture");
    image.src = window.URL.createObjectURL(input.files[0]);
}

const EditOverview = () => {
    return (
        <div>
            <form action="/create" method="post">
                <h1> Edit Profile: </h1>

                <label for="seller_picture">Profile Picture:</label>
                <br></br>
                <img alt = "seller profile" id = "seller_picture_display" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"></img>
                <br></br>
                <input required type="file" id="seller_picture" name="seller_picture" onChange={UpdateSellerDisplayPicture} accept="image/png, image/jpeg"></input>
                <br></br>

                <label for="seller_name">Seller Name:</label>
                <br></br>
                <input required type="text" id="seller_name" name="seller_name"></input>
                <br></br>

                <label for="seller_website">Seller Website:</label><br></br>
                <input required type="url" id="seller_website" name="seller_website"></input>
                <br></br>

                <label for="seller_email">Seller Email:</label>
                <br></br>
                <input required type="email" id="seller_email" name="seller_email"></input>
                <br></br>

                <label for="seller_phoneNumber">Seller Phone Number (format: 123-456-7890):</label>
                <br></br>
                <input type="tel" id="seller_phoneNumber" name="seller_phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                <br></br>

                <label for="seller_address">Seller Address:</label>
                <br></br>
                <input required type="text" id="seller_address" name="seller_address"></input>
                <br></br>

                <label for="seller_summary">Summary:</label>
                <br></br>
                <textarea required id="seller_summary" type="text" name="seller_summary"></textarea>
                <br></br>

                <br></br>
                <input type="submit" value="OK" />
            </form>
        </div>
    );
};

export default EditOverview;