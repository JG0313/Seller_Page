import React, { useState, useEffect } from "react";
import './assets/App.css';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import ProductSection from './pages/ProductSection';
import MidSection from './pages/MidSection';
import ImageMidSection from './pages/ImageMidSection';
import ReviewSection from './pages/ReviewSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

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
            <div className="app-container">
                <Navbar />
                <Header />
                <div className="content-container">
                    <ProductSection />
                    <div className="content-container">
                        <MidSection />                       
                        <div className="main-content">
                            <Routes>
                                <Route path="/productSection" element={<ProductSection />} />
                                <Route path="/midSection" element={<MidSection />} />
                                <Route path="/imageMidSection" element={<ImageMidSection />} />
                                <Route path="/reviewSection" element={<ReviewSection />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

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
