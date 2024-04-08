import React, { useState, useEffect } from "react";

import './assets/App.css';

// Components
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import axios from 'axios';

// Pages
import Seller from "./pages/sellerLandingPage";
import Designer from "./pages/designerLandingPage";
import Buyer from "./pages/customerLandingPage";
import { BuyerPageFramework, SellerPageFramework, DefaultPageFramework } from "./pages/Pageframework";
import Structures from "./pages/structures";
import Brands from "./pages/brands";
import Company from "./pages/company";
import Houses from "./pages/houses";
import Resources from "./pages/resources";
import Discover from "./pages/discover";
import Design from "./pages/design";
import Construct from "./pages/construct";
import Community from "./pages/community";
import Support from "./pages/support";
import MyAccount from "./pages/dummyPages/myAccount";
import MyFavorites from "./pages/dummyPages/myFavorites";
import MyCart from "./pages/myCart";
import Login from "./pages/login";
import SampleProduct from "./pages/dummyPages/sampleProduct";

import Header from './pages/Header';
import ProductSection from './pages/ProductSection';
import MidSection from './pages/MidSection';
import ImageMidSection from './pages/ImageMidSection';
import ReviewSection from './pages/ReviewSection';
import EditPage from './pages/base-edit-overview.js';

function App() {
    const [sellers, setSellers] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8080/getUsers')
        .then(sellers => setSellers(sellers.data))
        .catch(err => console.log(err));
    }, []);

    const [sellerID, setSellerID] = useState("660322de66ad374e72b6a49e");

    const [seller,  setSeller] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8080/getUserByID?id=" + sellerID)
        .then(seller => setSeller(seller.data))
        .catch(err => console.log(err));
    }, [sellerID]);

    return (
        <Router>
        <div>
            <Routes>
                <Route
                    exact path="/login/seller" //Path for it to be added too
                    element={<SellerPageFramework component={<Seller />} />} />
                <Route
                    exact path="/login/designer" //Path for it to be added too
                    element={<SellerPageFramework component={<Designer />} />} />
                <Route
                    exact path="/login/buyer" //Path for it to be added too
                    element={<BuyerPageFramework component={<Buyer />} />} />
                <Route
                    exact path="/" //Path for it to be added too
                    element={<DefaultPageFramework component={<Buyer />} />} />
                <Route
                    path="/login" //Path for it to be added too
                    element={<DefaultPageFramework component={<Login />} />} />
                <Route
                    path="/houses" //Path for it to be added too
                    element={<BuyerPageFramework component={<Houses />} />} />
                <Route
                    path="/structures" //Path for it to be added too
                    element={<BuyerPageFramework component={<Structures />} />} />
                <Route
                    path="/brands" //Path for it to be added too
                    element={<BuyerPageFramework component={<Brands />} />} />
                <Route
                    path="/resources" //Path for it to be added too
                    element={<BuyerPageFramework component={<Resources />} />} />
                <Route
                    path="/company" //Path for it to be added too
                    element={<BuyerPageFramework component={<Company />} />} />
                <Route
                    path="/discover" //Path for it to be added too
                    element={<SellerPageFramework component={<Discover />} />} />
                <Route
                    path="/design" //Path for it to be added too
                    element={<SellerPageFramework component={<Design />} />} />
                <Route
                    path="/construct" //Path for it to be added too
                    element={<SellerPageFramework component={<Construct />} />} />
                <Route
                    path="/community" //Path for it to be added too
                    element={<SellerPageFramework component={<Community />} />} />
                <Route
                    path="/support" //Path for it to be added too
                    element={<SellerPageFramework component={<Support />} />} />
                <Route
                    path="/dummyPages/myAccount" //Path for it to be added too
                    element={<BuyerPageFramework component={<MyAccount />} />} />
                <Route
                    path="/dummyPages/myFavorites" //Path for it to be added too
                    element={<BuyerPageFramework component={<MyFavorites />} />} />
                <Route
                    path="/myCart" //Path for it to be added to
                    element={<BuyerPageFramework component={<MyCart />} />} />
                <Route
                    path="/dummyPages/sampleProduct" //Path for it to be added too
                    element={<DefaultPageFramework component={<SampleProduct />} />} />

                <Route path="/productSection" element={<ProductSection />} />
                <Route path="/midSection" element={<MidSection />} />
                <Route path="/imageMidSection" element={<ImageMidSection />} />
                <Route path="/reviewSection" element={<ReviewSection />} />
                <Route path="/edit-overview" element={<EditPage />} />
            </Routes>
        </div>
            <Link to="/edit-overview" className="btn btn-primary">hello</Link>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map(seller => (
                                <tr key={seller.id}>
                                    <td>{seller.seller_name}</td>
                                    <td>{seller.seller_email}</td>
                                    <td>{seller.seller_phoneNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Router>
    );
}

export default App;
