import React, { useState, useEffect } from "react";
import './assets/App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MiddleBar from './components/MiddleBar';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';


// Pages
import Overview from "./pages/overview";
import Products from "./pages/products";
import Partners from "./pages/partners";
import Articles from "./pages/articles";
import BaseEditOverview from "./pages/base-edit-overview"; 

function App() {

    const [sellers, setSellers] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8080/getUsers')
        .then(sellers => setSellers(sellers.data))
        .catch(err => console.log(err))
    }, [])

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
                            <Route path="/edit-overview" element={<BaseEditOverview />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
            <table className="table">
            <thread>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thread>
            <tbody>
                {
                    sellers.map(seller => {
                        return <tr>
                            <td>{seller.seller_name}</td>
                            <td>{seller.seller_email}</td>
                            <td>{seller.seller_phoneNumber}</td>
                        </tr>

                    })
                }
            </tbody>
            </table>
            </div>
        </div>
    </Router>
);

};

export default App;


