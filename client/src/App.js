import React from "react";
import './styles/App.css';
import app from './apptest.js';

//Components
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages";
import Overview from "./pages/overview";
import Products from "./pages/products";
import Partners from "./pages/partners";
import Articles from "./pages/articles";
import EditOverview from "./pages/edit-overview";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/products" element={<Products />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/edit-overview" element={<EditOverview />} />
            </Routes>
        </Router>
  );
}

export default App;
