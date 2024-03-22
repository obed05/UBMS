import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElectricityBill from "./components/ElectricityBill";
import HouseMaintenance from "./components/HouseMaintenance";
import WaterBill from "./components/WaterBill";
import './App.css';

function Home() {
  return (
    <div>
      <h3>Select the type of Bill</h3>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/WaterBill">Water Bill</Link></li>
            <li><Link to="/ElectricityBill">Electricity Bill</Link></li>
            <li><Link to="/HouseMaintenance">House Maintenance</Link></li>
          </ul>
        </nav>
        <div className="bill-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WaterBill" element={<WaterBill />} />
            <Route path="/ElectricityBill" element={<ElectricityBill />} />
            <Route path="/HouseMaintenance" element={<HouseMaintenance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
