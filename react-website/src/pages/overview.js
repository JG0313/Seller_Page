import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Overview (){
    const [sellerID, setSellerID] = useState("660322de66ad374e72b6a49e");

    const [seller,  setSeller] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8080/getUserByID?id=" + sellerID)
        .then(seller => setSeller(seller.data))
        .catch(err => console.log(err))
    })
    return (
        <div>
            <h1>
                OVERVIEW PAGE!!
            </h1>
            <div>
            <p>{sellerID}</p>
            <p>The selected seller's name is {seller.seller_name}, email is {seller.seller_email}, and phone number is {seller.seller_phoneNumber}</p>
            <button onClick={()=> setSellerID("6602577ce48e1e8ccd381882")}>
                Seller 1
            </button>
            <button onClick={()=> setSellerID("660257bee48e1e8ccd381884")}>
                Seller 2
            </button>
            <button onClick={()=> setSellerID("660af60ec30674a9825f7109")}>
                Seller 3
            </button>
        </div>
            <div>
                <Link to="/edit-overview" className="btn btn-primary">hello</Link>
            </div>
        </div>
    );
};

export default Overview;