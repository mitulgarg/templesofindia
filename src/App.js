// import React, { useState, useEffect } from "react";
import './App.css';
import Description from './components/Description/description';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home.js';
import Temple from './components/Temple/Temple'
import Contact from './components/Contact/Contact';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/temples/:id/*" element={<Description/>} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

