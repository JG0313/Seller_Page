import React, { Component } from "react";
import '../assets/edit-overview.css';
import { useState , useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import e from "cors";

var seller;
var sellerID = "660b8c7240b171e3ad709c51";;
var partnerRoot;

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

function BaseEditOverview()
{
    useEffect(()=> {
        handleDataLoad();
    }, [])

    const handleDataLoad = async() =>
    {
        const res = await axios.get("http://localhost:8080/getUserByID?id=" + sellerID);
        if(res.data === null || res.data.name == "CastError")
        {
            return;
        }
        else
        {
            document.getElementById('seller_website').value = res.data.seller_website;
            document.getElementById('seller_summary').value = res.data.seller_summary;
            document.getElementById('seller_name').innerText = res.data.seller_name;

            GetProductsFromID();

            if(!Object.hasOwn(res.data, "seller_partners")) { Object.assign(res.data, {"seller_partners": []}) }

            if(partnerRoot == null)
            {
                partnerRoot = createRoot(document.getElementById('seller_partners'));
            }
            partnerRoot.render(<PartnerThumbnails partners={res.data.seller_partners} /> );

            seller = res.data;
        }
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        console.log(JSON.stringify(seller));
        let result = await fetch(
            'http://localhost:8080/update?id=' + sellerID, {
                method: "post",
                body: JSON.stringify(seller),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result;
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
        }

        window.location.reload();
    }

    function AddPartner()
    {
        let partnerID = document.getElementById('partner_name').value;
        document.getElementById('partner_name').value = "";

        if(seller.seller_partners.includes(partnerID) || partnerID == sellerID) { return; }
        
        seller.seller_partners.push(partnerID);
        partnerRoot.render(<PartnerThumbnails partners={seller.seller_partners} /> );
    }

    return ( 
    <div className="editForm">
        <form action="">
            <h1> Edit Profile </h1> 

            <h2 id = "seller_name"> Name </h2> 

            <label htmlFor="seller_picture">Profile Picture:</label>
            <br></br>

            <img alt = "seller profile" id = "seller_picture_display" src={defaultImage}></img>
            <br></br>

            <input type="file" id="seller_picture" name="seller_picture" 
            onChange={UpdateSellerDisplayPicture} accept="image/png, image/jpeg"></input>
            <br></br>

            <label htmlFor="seller_website">Seller Website:</label><br></br>
            <input type="url" id="seller_website" name="seller_website" 
            onChange={(e) => seller.seller_website = e.target.value}
            ></input>
            <br></br>

            <label htmlFor="seller_summary">Summary:</label>
            <br></br>
            <textarea id="seller_summary" type="text" name="seller_summary" 
            onChange={(e) => seller.seller_summary = e.target.value} 
            ></textarea>
            <br></br>

            {/* Will update after talking to other team */}

            <label htmlFor="seller_products"><h2>Products:</h2></label>

            <div id = "seller_products" className="thumbnailHolder">
            </div>

            {/*<br></br>
            <button type="button" onClick = { AddProduct } > Add Product </button>
            <br></br>*/}

            <label htmlFor="seller_partners"><h2>Partners:</h2></label>

            <div id = "seller_partners">
            </div>

            <br></br>
            <input id="partner_name" name="partner_name" ></input>
            <button type="button" onClick = { AddPartner } > Add Partner </button>
            <br></br>

            <br></br>
            <button type = "submit" onClick = { handleOnSubmit } > Save Changes </button> 
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

//#region Visual Components

const GetProductsFromID = async() =>
{
    let productThumbnails = document.getElementById("seller_products");
    productThumbnails.innerHTML = `Loading...`;

    let outProduct = null;

    // connect to database to get seller products from ID

    /*
    await axios.get("http://localhost:8080/getUserByID?id=" + product_ID)
    .then(product => outProduct = product.data)
    .catch(err => outProduct = null)
    */

    outProduct = dummyProducts;

    if(outProduct !== null)
    {
        productThumbnails.innerHTML = ``;

        outProduct.forEach(element => 
        {
            productThumbnails.innerHTML +=
            `
                <div class="thumbnail">
                    <p>${element.product_name}</p>
                    <p>${element.product_price}</p>
                </div>
            `
        });
    }
}

class PartnerThumbnails extends Component
{
    render() {
        if(this.props.partners === null) {return;}
        return (
            <div className="thumbnailHolder"> 
            {         
                this.props.partners.map(partner_ID => <PartnerThumbnail key={partner_ID} partner_ID = {partner_ID}/>)
            }
            </div>
        )
    }
}

class PartnerThumbnail extends Component
{
    render () {
        let thumbnailID = "partnerThumnail_" + this.props.partner_ID;
        GetPartnerFromID(this.props.partner_ID, thumbnailID);

        return(
            <div id = {thumbnailID} className="thumbnail">
                <p>Loading...</p>
            </div>
        )
    }
}

const GetPartnerFromID = async(partner_ID, thumbnailID) =>
{
    let outPartner = null;
    await axios.get("http://localhost:8080/getUserByID?id=" + partner_ID)
    .then(partner => outPartner = partner.data)
    .catch(err => outPartner = null)

    let thumbnail = document.getElementById(thumbnailID);

    if(outPartner !== null)
    {
        thumbnail.innerHTML = 
        `
            <p>${outPartner.seller_name}</p>
            <button id = ${thumbnailID + "_button"} type="button">Remove</button>
        `

        document.getElementById(thumbnailID + "_button").addEventListener('click', () => RemovePartner(partner_ID))
    }
}

function RemovePartner(partner_ID)
{
    const index = seller.seller_partners.indexOf(partner_ID);

    if (index > -1) { // only splice array when item is found
        seller.seller_partners.splice(index, 1); // 2nd parameter means remove one item only
    }

    partnerRoot.render(<PartnerThumbnails partners={seller.seller_partners} /> );
}

const dummyProducts =
[
    {product_name : "stuffsssssssssssssssssssssss", product_price : "20"},
    {product_name : "stuff2", product_price : "50"},
    {product_name : "stuff3", product_price : "12"},
    {product_name : "stuff4", product_price : "3"}
]

export default BaseEditOverview;