import React, { useState, useEffect } from "react";
import './styles/App.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'; 

// Pages
import Overview from "./pages/overview";
import Products from "./pages/products";
import Partners from "./pages/partners";
import Articles from "./pages/articles";

function App() {
    const [data, setData] = useState(null);
    const [sellers, setSellers] = useState([]);
    const [newSeller, setNewSeller] = useState({
        seller_name: '',
        seller_email: '',
        seller_phoneNumber: '',
        seller_summary: ''
    });

    // Function to fetch data from backend
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/data'); // Replace '/api/data' with your backend route
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to fetch all sellers from the backend
    const fetchSellers = async () => {
        try {
            const response = await axios.get('/getAllSellers');
            setSellers(response.data);
        } catch (error) {
            console.error('Error fetching sellers:', error);
        }
    };

    // Function to create a new seller
    const createSeller = async () => {
        try {
            await axios.post('/create', newSeller);
            setNewSeller({
                seller_name: '',
                seller_email: '',
                seller_phoneNumber: '',
                seller_summary: ''
            });
            fetchSellers(); // Refresh the list of sellers after creating a new one
        } catch (error) {
            console.error('Error creating seller:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
        fetchSellers(); // Fetch sellers when the component mounts
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <TopBar />
                <div className="content-container">
                    <SideBar />
                    <div className="content-container">
                        <MiddleBar />                       
                    <div className="main-content">
                        <Routes>
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/partners" element={<Partners />} />
                            <Route path="/articles" element={<Articles />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Sellers</h1>
            <div>
                <h2>Create New Seller</h2>
                <input type="text" value={newSeller.seller_name} onChange={e => setNewSeller({ ...newSeller, seller_name: e.target.value })} placeholder="Name" />
                <input type="email" value={newSeller.seller_email} onChange={e => setNewSeller({ ...newSeller, seller_email: e.target.value })} placeholder="Email" />
                <input type="text" value={newSeller.seller_phoneNumber} onChange={e => setNewSeller({ ...newSeller, seller_phoneNumber: e.target.value })} placeholder="Phone Number" />
                <textarea value={newSeller.seller_summary} onChange={e => setNewSeller({ ...newSeller, seller_summary: e.target.value })} placeholder="Summary"></textarea>
                <button onClick={createSeller}>Create Seller</button>
            </div>
            <div>
                <h2>All Sellers</h2>
                <ul>
                    {sellers.map(seller => (
                        <li key={seller._id}>{seller.seller_name} - {seller.seller_email}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Router>
);

};

export default App;


