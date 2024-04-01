import React from "react";
import '../styles/edit-overview.css';
import { useState } from 'react';

const BaseEditOverview = () => {

    const [seller_name, setName] = useState("");
    const [seller_website, setWebsite] = useState("");
    const [seller_email, setEmail] = useState("");
    const [seller_phoneNumber, setPhoneNumber] = useState("");
    const [seller_address, setAddress] = useState("");
    const [seller_summary, setSummary] = useState("");

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:8080/create', {
                method: "post",
                body: JSON.stringify({ seller_name, seller_website, seller_email, seller_phoneNumber, seller_address, seller_summary }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setPhoneNumber("");
            setSummary("");
        }
    }
    return ( 
    <div className="editForm">
        <h1> Edit Profile </h1> 
        <form action = "" >
            <label for="seller_picture">Profile Picture:</label>
            <br></br>
            <img alt = "seller profile" id = "seller_picture_display" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"></img>
            <br></br>
            <input required type="file" id="seller_picture" name="seller_picture" 
            onChange={UpdateSellerDisplayPicture} accept="image/png, image/jpeg"></input>
            <br></br>

            <label for="seller_name">Seller Name:</label>
            <br></br>
            <input required type="text" id="seller_name" name="seller_name" 
            onChange={(e) => setName(e.target.value)} 
            value = { seller_name }></input>
            <br></br>

            <label for="seller_website">Seller Website:</label><br></br>
            <input required type="url" id="seller_website" name="seller_website" 
            onChange={(e) => setWebsite(e.target.value)} 
            value = { seller_website }></input>
            <br></br>

            <label for="seller_email">Seller Email:</label>
            <br></br>
            <input required type="email" id="seller_email" name="seller_email" 
            onChange={(e) => seller_email(e.target.value)} 
            value = { seller_email }></input>
            <br></br>

            <label for="seller_phoneNumber">Seller Phone Number (format: 123-456-7890):</label>
            <br></br>
            <input type="tel" id="seller_phoneNumber" name="seller_phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            value = { seller_phoneNumber }></input>
            <br></br>

            <label for="seller_address">Seller Address:</label>
            <br></br>
            <input required type="text" id="seller_address" name="seller_address" 
            onChange={(e) => setAddress(e.target.value)} 
            value = { seller_address }></input>
            <br></br>

            <label for="seller_summary">Summary:</label>
            <br></br>
            <textarea required id="seller_summary" type="text" name="seller_summary" 
            onChange={(e) => setSummary(e.target.value)} 
            value = { seller_summary }></textarea>
            <br></br>

            // Will update after talking to other team
            <label for="seller_products">Seller Products:</label>
            <br></br>
            <input required multiple type="text" id="seller_products" name="seller_products"></input>
            <br></br>

            <label for="seller_partners">Seller Partners:</label>
            <br></br>
            <input required multiple type="text" id="seller_partners" name="seller_partners"></input>
            <br></br>
            <button type = "submit" onClick = { handleOnSubmit } > submit </button> 
        </form>
    </div>
    );
};

function UpdateSellerDisplayPicture()
{
    let image = document.getElementById("seller_picture_display");
    let input = document.getElementById("seller_picture");
    image.src = window.URL.createObjectURL(input.files[0]);
}

export default BaseEditOverview;