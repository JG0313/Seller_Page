import React from "react";
import './styles/App.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';

// Components
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Overview from "./pages/overview";
import Products from "./pages/products";
import Partners from "./pages/partners";
import Articles from "./pages/articles";

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
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </Router>
);

};

export default App;

