import React, { useState, useEffect } from "react";
import './assets/App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MiddleBar from './components/MiddleBar';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Overview from "./pages/overview";
import Products from "./pages/products";
import Partners from "./pages/partners";
import Articles from "./pages/articles";
import BaseEditOverview from "./pages/base-edit-overview"; 

function App() {

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
    </Router>
);

};

export default App;


