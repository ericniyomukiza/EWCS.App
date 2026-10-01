import React, { Component } from "react";
import { Routes,Route } from "react-router-dom";
import AdminLogin from "./component/pages/admin";
import AdminDashboard from "./component/AdminDashboard";
import Gallery from "./component/pages/Gallery";
import Home from "./component/Home";
import Destinations from "./component/pages/Destinations";
import Tours from "./component/pages/Tours";
import Contact from "./component/pages/Contact";
import Visit from "./component/pages/Visit";
import Booking from "./component/pages/booking";
import About from "./component/pages/About";
 function App() {
   return (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
      </Routes>
   )
 }
 export default App