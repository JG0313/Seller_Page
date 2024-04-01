import React from "react";
import '../assets/edit-overview.css';

function UpdateSellerDisplayPicture()
{
    let image = document.getElementById("seller_picture_display");
    let input = document.getElementById("seller_picture");
    image.src = window.URL.createObjectURL(input.files[0]);
}

function SetTextFromJSON(jsonData)
{
    SetText(JSON.parse(jsonData))
}

function SetText(sellerData)
{
    document.getElementById("seller_picture_display").src = sellerData.seller_picture;
    document.getElementById("seller_name").value = sellerData.seller_name;
    document.getElementById("seller_website").value = sellerData.seller_website;
    document.getElementById("seller_email").value = sellerData.seller_email;
    document.getElementById("seller_phoneNumber").value = sellerData.seller_phoneNumber;
    document.getElementById("seller_address").value = sellerData.seller_address;
    document.getElementById("seller_summary").value = sellerData.seller_summary;
    document.getElementById("seller_products").value = sellerData.seller_products;
    document.getElementById("seller_partners").value = sellerData.seller_partners;
}

const EditOverview = () => {
    return (
        <div className="editForm">
            <form action="/create" method="post">
                <h2> Edit Profile: </h2>

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

                <label for="seller_products">Seller Products:</label>
                <br></br>
                <input required multiple type="text" id="seller_products" name="seller_products"></input>
                <br></br>

                <label for="seller_partners">Seller Partners:</label>
                <br></br>
                <input required multiple type="text" id="seller_partners" name="seller_partners"></input>
                <br></br>

                <br></br>
                <input type="submit" value="OK" />
            </form>
        </div>
    );
};

export default EditOverview;