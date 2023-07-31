import React, { useState, useEffect } from "react";
import ImageSlider from './ImageSlider/ImageSlider';
import './Home.css';
import NavHead from "./NavHead";
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from "react-spring";
import DropDown from './Dropdownbutton/DropDown';

const Home = () => {
  const [temples, setTemples] = useState([]);
  const [flip, setFlip] = useState(false);
  const [query, setQuery] = useState("");
  const [templestwo, setTemplestwo] = useState([]);


  const props= useSpring({
      to: { opacity:1 },
      from: { opacity:0 },
      // reset: true,
      // reverse: flip,
      delay:550,
      onRest: ()=> setFlip(!flip),
  })


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
    setTemplestwo(data)
  };
  

  const handleSearch = () => {
    if (query) {
      const filteredTemples = temples.filter((temple) =>
        temple.temple_name.toString().toLowerCase().includes(query.toString().toLowerCase())
      );
      setTemplestwo(filteredTemples);
      console.log(filteredTemples);
    }
    if(query===""){
      setTemplestwo(temples)
    }
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
                <input 
                className="form-control border-secondary py-2" 
                type="text" 
                value={query}
                onChange={e => setQuery(e.target.value)} 
                style={{ 'marginTop': '180px' }} 
                placeholder="Search"
                />  
                
                <Button variant="outline-light"
                 style={{ 'marginTop': '180px' }}
                 onClick={handleSearch}

                //  onClick={getFilteredItems(query,temples)}
                 >Search
                 </Button>

              </div>
            </div>
          </div>
          <br></br>
          <h1>Your One Stop destination for all the Temples of India!
          </h1>
          </div>
          <animated.div style={props}>
          <div className="card2deck">
          
            <DropDown newtemp={templestwo}/>
            
          
        </div>
        <footer style={{ background: "#333" }}>
          <div class="footer-content">
            <p >&copy; 2023 Temples Of India. All rights reserved.</p>
            <p>Contact: contact@example.com</p>
          </div>
        </footer>
        </animated.div>
      </div>
    </div>
  );
};

export default Home;

