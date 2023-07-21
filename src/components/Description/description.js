import React, { useState, useEffect } from "react";
import "./description.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import DescriptionSlider from "./DescriptionSlider/descriptionslider";
import DescriptionWeather from "./DescriptionWeather/DescriptionWeather";

// const Description = ({ id,name,location,image,description }) =>{

const Description = () => {
    const [temples, setTemples] = useState([]);
    const { id } = useParams()

    const getData = async () => {
        var requestOptions = {
            method: "GET",
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
        };

        const response = await fetch(`http://localhost:3030/temples/${id}`, requestOptions)
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
            <div className="row">
                <div className="col-1">
                <button className="custom-button btn btn-secondary" style={{ padding: '20px 14px'}}>
                    <Link className=" text-white text-decoration-none" to={`/`}>                
                         <img src="https://cdn-icons-png.flaticon.com/512/318/318504.png" alt="buttonpng" border="0" className="back-button" />
                    </Link>
                </button> 

                </div>   
                <div className="col-10 ">   
                {/* <h1 style={{align:"center"}}> */}
                <h1>
                    {temples.temple_name}
                </h1>
                
                <h5>{temples.temple_location}</h5>
                </div>
                </div>
            </div>

        <div className="custom-container">
            <div className="row">
            <div className="col-5">
                {/* <img src={temples.temple_image} alt="templeimage" /> */}
                <DescriptionSlider />
            </div>
            <div className="col-7">
            

            <p class="temple-description">{temples.temple_description}</p>
            {/* <DescriptionWeather /> */}
            </div>

            </div>

            <footer>
                <p class='content'>&copy; 2023 Temples Of India. All rights reserved.</p>
            </footer>
        </div>
      </div>

    )
}

export default Description;
