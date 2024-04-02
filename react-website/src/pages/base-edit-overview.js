import React, { Component } from "react";
import '../assets/edit-overview.css';
import { useState , useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

var productRoot;
var partnerRoot;

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

function BaseEditOverview()
{
    const [sellerID, setSellerID] = useState("660b8c7240b171e3ad709c51");
    var [seller,  setSeller] = useState([])

    useEffect(()=> {
        handleDataLoad();
    }, [])

    const handleDataLoad = async() =>
    {
        try
        {
            const res = await axios.get("http://localhost:8080/getUserByID?id=" + sellerID);

            document.getElementById('seller_website').value = res.data.seller_website;
            document.getElementById('seller_summary').value = res.data.seller_summary;

            if(!Object.hasOwn(res.data, "seller_products")) { Object.assign(res.data, {"seller_products": []}) }

            if(productRoot == null)
            {
                productRoot = createRoot(document.getElementById('seller_products'));
            }
            productRoot.render(<ProductThumbnails products={res.data.seller_products} /> )

            if(!Object.hasOwn(res.data, "seller_partners")) { Object.assign(res.data, {"seller_partners": []}) }

            if(partnerRoot == null)
            {
                partnerRoot = createRoot(document.getElementById('seller_partners'));
            }
            partnerRoot.render(<PartnerThumbnails partners={res.data.seller_partners} /> );

            setSeller(res.data);
        }
        catch (error)
        {

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
    }

    function AddPartner()
    {
        let partnerID = document.getElementById('partner_name').value;

        if(seller.seller_partners.includes(partnerID))
        {
            return;
        }

        seller.seller_partners.push(partnerID);
        partnerRoot.render(<PartnerThumbnails partners={seller.seller_partners} /> );
    }

    return ( 
    <div className="editForm">
        <form action="">
            <h1> Edit Profile </h1> 

            <h2 id = "seller_name"> {seller.seller_name} </h2> 

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

            <div id = "seller_products">
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

//#region Get Database Values

function GetProductFromID(product_ID)
{
    // if key is not in database
    if(!(product_ID in dummyProductDictionary)) { return null; }
    return dummyProductDictionary[product_ID];
}

//#endregion

//#region Visual Components

class ProductThumbnails extends Component
{
    render() {
        if(this.props.products === null) {return;}
        return (
            <div className="thumbnailHolder"> 
            {         
                this.props.products.map(product_ID => <ProductThumbnail product_ID = {product_ID} />)
            }
            <br></br>
            </div>
        )
    }
}

class ProductThumbnail extends Component
{
    handleClick = () => { EditProductPage(this.props.product_ID); };
    render() {
        let product = GetProductFromID(this.props.product_ID);

        if(product == null) { return null; }

        return (
            <div className="thumbnail">
                <p>{product.product_name}</p>
                <p>${product.product_price}</p>
                <button type="button" onClick={this.handleClick}>Edit Product</button>
            </div>
        )
    }
}

class PartnerThumbnails extends Component
{
    render() {
        if(this.props.partners === null) {return;}
        return (
            <div className="thumbnailHolder"> 
            {         
                this.props.partners.map(partner_ID => <PartnerThumbnail partner_ID = {partner_ID}/>)
            }
            </div>
        )
    }
}

class PartnerThumbnail extends Component
{
    render () {
        let thumbnailID = "partnerThumnail_" + this.props.partner_ID + "_" + this.props.index;
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

    if(outPartner !== null)
    {
        document.getElementById(thumbnailID).innerHTML = 
        `
            <p>${outPartner.seller_name}</p>
        `
    }
}

//#endregion

//#region Partner and Product Functions

function AddProduct()
{
    // link to add product page
}

function RemovePartner(partner_ID)
{

}

function EditProductPage(product_ID)
{
    console.log(product_ID);
}

//#endregion

//#region Dummy Values

const dummyProductDictionary =
{
    1001 : {product_name : "stuffsssssssssssssssssssssss", product_price : "20"},
    1002 : {product_name : "stuff2", product_price : "50"},
    1003 : {product_name : "stuff3", product_price : "12"},
    1004 : {product_name : "stuff4", product_price : "3"}
}

//#endregion

export default BaseEditOverview;