import React, { useState, useEffect } from "react";
import ImageSlider from './ImageSlider/ImageSlider';
import './Home.css';
import Dropdownbutton from './Dropdownbutton/Dropdownbutton'
import { Link } from 'react-router-dom';
import NavHead from "./NavHead";
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [temples, setTemples] = useState([]);
  
    const getData = async () => {
      var requestOptions = {
        method: "GET",
        headers: {
          'Content-Type':
            'application/json;charset=utf-8'
        },
      };
  
      const response = await fetch('http://localhost:3030/temples', requestOptions)
      const data = await response.json()
      //console.log(data)
      setTemples(data)
      //async await
  
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <div>
        <NavHead />
        
        <ImageSlider />
        <div>
        <div className="container">



 
    <h5>Bootstrap 4 Search Bar</h5>
    <div className="row justify-content-center">
        <div className="col-6 text-center">
            <div className="input-group">
            {/* <div className="search"> */}
                <input className="form-control border-secondary py-2" type="Search" value="Search" style={{'marginTop': '180px'}}/>
                <Button variant="outline-light" style={{'marginTop': '180px'}}>Search</Button>
            </div>
        
    </div>
    </div>
    






          <br></br>
        <h1>Your One Stop destination for all the Temples of India!
        </h1>

        <div className="card2deck">
        <Dropdownbutton/>

       </div>
       </div>
       <footer style={{background:"#333"}}>
       <div class="footer-content">
                <p >&copy; 2023 Temples Of India. All rights reserved.</p>
                <p>Contact: contact@example.com</p>
        </div>
        </footer>
        </div>
       </div>
    );
  };
  
  export default Home;
  
  