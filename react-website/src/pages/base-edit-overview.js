import React, { Component } from "react";
import '../assets/edit-overview.css';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

const BaseEditOverview = () => {

    const [seller_website, setWebsite] = useState("");
    const [seller_summary, setSummary] = useState("");

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:8080/create', {
                method: "post",
                body: JSON.stringify({ seller_website, seller_summary }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setSummary("");
            setWebsite("");
        }
    }

    window.addEventListener('load', LoadDataToEditPage);

    return ( 
    <div className="editForm">
        <h1> Edit Profile </h1> 

        <h2 id = "seller_name"> Name </h2> 

        <label htmlFor="seller_picture">Profile Picture:</label>
        <br></br>

        <img alt = "seller profile" id = "seller_picture_display" src={defaultImage}></img>
        <br></br>

        <input required type="file" id="seller_picture" name="seller_picture" 
        onChange={UpdateSellerDisplayPicture} accept="image/png, image/jpeg"></input>
        <br></br>

        <label htmlFor="seller_website">Seller Website:</label><br></br>
        <input required type="url" id="seller_website" name="seller_website" 
        onChange={(e) => setWebsite(e.target.value)} 
        value = { seller_website }></input>
        <br></br>

        <label htmlFor="seller_summary">Summary:</label>
        <br></br>
        <textarea required id="seller_summary" type="text" name="seller_summary" 
        onChange={(e) => setSummary(e.target.value)} 
        value = { seller_summary }></textarea>
        <br></br>

        {/* Will update after talking to other team */}

        <label htmlFor="seller_products"><h2>Products:</h2></label>

        <div id = "seller_products">
            <p>No Products</p>
        </div>

        <br></br>
        <button onClick = { AddProduct } > Add Product </button>
        <br></br>

        <label htmlFor="seller_partners"><h2>Partners:</h2></label>

        <div id = "seller_partners">
            <p>No Partners</p>
        </div>

        <br></br>
        <button onClick = { AddPartner } > Add Partner </button>
        <br></br>

        <br></br>
        <button type = "submit" onClick = { handleOnSubmit } > submit </button> 
    </div>
    );
};

function UpdateSellerDisplayPicture()
{
    let image = document.getElementById("seller_picture_display");
    let input = document.getElementById("seller_picture");
    image.src = window.URL.createObjectURL(input.files[0]);
}

function LoadDataToEditPage()
{
    // Get Data From Database
    // dummy data rn
    let data = GetUserFromID(1234);    

    // Load User Name
    document.getElementById("seller_name").innerText = data.seller_name;
    // Load Existing Summary
    document.getElementById("seller_summary").value = data.seller_summary;
    // Load Existing Website
    document.getElementById("seller_website").value = data.seller_website;

    // Load Existing Products
    if(Object.hasOwn(data, 'seller_products') && data.seller_products.length > 0)
    {
        let domNode = document.getElementById('seller_products');
        let root = createRoot(domNode);
        root.render(<ProductThumbnails products={data.seller_products} /> )
    }

    // Load Existing Partners
    if(Object.hasOwn(data, 'seller_partners') && data.seller_partners.length > 0)
    {
        let domNode = document.getElementById('seller_partners');
        let root = createRoot(domNode);
        root.render(<PartnerThumbnails partners={data.seller_partners} /> )
    }
}

//#region Get Database Values

function GetProductFromID(product_ID)
{
    // if key is not in database
    if(!(product_ID in dummyProductDictionary)) { return null; }
    console.log(dummyProductDictionary[product_ID]);
    return dummyProductDictionary[product_ID];
}

function GetPartnerFromID(partner_ID)
{
    // if key is not in database
    if(!(partner_ID in dummyPartnerDictionary)) { return null; }
    console.log(dummyPartnerDictionary[partner_ID]);
    return dummyPartnerDictionary[partner_ID];
}

function GetUserFromID(user_ID)
{
    return dummyUser;
}

//#endregion

//#region Visual Components

class ProductThumbnails extends Component
{
    render() {
        return (
            <div className="productThumbnailHolder"> 
            {         
                this.props.products.map(product_ID => <ProductThumbnail product_ID = {product_ID} />)
            }
            </div>
        )
    }
}

class ProductThumbnail extends Component
{
    handleClick = () => { EditProductPage(this.props.product_ID); };
    render() {
        let product = GetProductFromID(this.props.product_ID);

        return (
            <div className="productThumbnail">
                <h3>{product.product_name}</h3>
                <p>${product.product_price}</p>
                <button onClick={this.handleClick}>Edit Product</button>
            </div>
        )
    }
}

class PartnerThumbnails extends Component
{
    render() {
        return (
            <div className="partnerThumbnailHolder"> 
            {         
                this.props.partners.map(partner_ID => <PartnerThumbnail partner_ID = {partner_ID}/>)
            }
            </div>
        )
    }
}

class PartnerThumbnail extends Component
{
    handleClick = () => { RemovePartner(this.props.partner_ID); };
    render() {
        let partner = GetPartnerFromID(this.props.partner_ID);

        if(partner == null)
        {
            return null;
        }

        return (
            <div className="partnerThumbnail">
                <h3>{partner.partner_name}</h3>
                <button onClick={this.handleClick}>Remove Partner</button>
            </div>
        )
    }
}
//#endregion

//#region Partner and Product Functions

function AddPartner()
{
    // link to add partner page
}

function AddProduct()
{
    // link to add product page
}

function RemovePartner(partner_ID)
{
    console.log(partner_ID);
}

function EditProductPage(product_ID)
{
    console.log(product_ID);
}

//#endregion

//#region Dummy Values

const dummyProductDictionary =
{
    1001 : {product_name : "stuff", product_price : "20"},
    1002 : {product_name : "stuff2", product_price : "50"},
    1003 : {product_name : "stuff3", product_price : "12"},
    1004 : {product_name : "stuff4", product_price : "3"}
}

const dummyPartnerDictionary =
{
    1001 : {partner_name : "guy"},
}

const dummyUser =
{
    seller_name : 'Anthony Drapeau',
    seller_summary : 'does stuff',
    seller_website : 'https://www.mundanepixel.com/',
    seller_products : 
    [
        1001, 1002, 1003, 1004
    ],
    seller_partners : 
    [
        1001
    ]
};

//#endregion



export default BaseEditOverview;