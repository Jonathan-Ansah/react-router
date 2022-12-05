import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="services">Services</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
