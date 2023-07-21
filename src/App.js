// import React, { useState, useEffect } from "react";
import './App.css';
import Description from './components/Description/description';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home.js';



const App = () => {
  // const [temples, setTemples] = useState([]);

  // const getData = async () => {
  //   var requestOptions = {
  //     method: "GET",
  //     headers: {
  //       'Content-Type':
  //         'application/json;charset=utf-8'
  //     },
  //   };

  //   const response = await fetch('http://localhost:3030/temples', requestOptions)
  //   const data = await response.json()
  //   //console.log(data)
  //   setTemples(data)
  //   //async await

  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/temples/:id/*" element={<Description/>} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

