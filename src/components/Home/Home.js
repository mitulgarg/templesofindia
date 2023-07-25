import React, { useState, useEffect } from "react";
import TempleList from '../TempleList/TempleList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageSlider from './ImageSlider/ImageSlider';
import './Home.css';
import Dropdownbutton from './Dropdownbutton/Dropdownbutton'

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
        <div className="header">
        <h1>The Temples Of India</h1>
        <h5>Click on a Card for Detailed Information</h5>
        </div>
        <ImageSlider />
        <div className="container">
        <div className="card-deck">
        <Dropdownbutton/>

          {/* <Row>
            {temples.map((temple) => (
              <Col>
                <TempleList key={temple.id} temple={temple} />
              </Col>
            ))}
          </Row> */}
       </div>
       <footer>
                <p>&copy; 2023 Temples Of India. All rights reserved.</p>
        </footer>
       </div>
       </div>
    );
  };
  
  export default Home;
  
  