import React, { useState, useEffect } from "react";
import "./description.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import DescriptionSlider from "./DescriptionSlider/descriptionslider";
import DescriptionWeather from "./DescriptionWeather/DescriptionWeather"


const Description = () => {
    const [temples, setTemples] = useState([]);
    const { id } = useParams();
    const [weather, setWeather] = useState(null);

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

        setTemples(data)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.temple_location}&units=metric&APPID=2fb0bedfcc179de1f854f9bc6bd61fd1`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
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
                        <button className="custom-button btn btn-secondary" style={{ padding: '12px 10px', 'marginTop': '7px' }}>
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
                <div className="content">
                <div className="row">
                    <div className="col-5">
                        {/* <img src={temples.temple_image} alt="templeimage" /> */}
                        <DescriptionSlider />
                    </div>
                    <div className="col-7">


                        {
                            weather && <DescriptionWeather props={weather} />
                        }

                        <p className="temple-description">{temples.temple_description}</p>

                    </div>
                    </div>
                </div>
                </div>
                <footer>
                    <div class="footerdesc">
                        <p >&copy; 2023 Temples Of India. All rights reserved.</p>
                        <p>Contact: contact@example.com</p>
                    </div>
                </footer>
                
            </div>

    )
}

export default Description;
