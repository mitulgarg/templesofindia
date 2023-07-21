import React, { useState, useEffect } from "react";
import "./description.css";
import { useParams } from "react-router-dom";


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
        <div className="Description">
            <div className="header">
            <h1>{temples.temple_name}</h1>
            <h5>{temples.temple_location}</h5>
            </div>
            <div class="img">
                <img src={temples.temple_image} alt="templeimage" />
            </div>
            <br></br><br></br>
            <p class="temple-description">{temples.temple_description}</p>
            <br></br>
            <footer>
                <p class='content'>&copy; 2023 Temples Of India. All rights reserved.</p>
            </footer>


        </div>
    )
}

export default Description;
