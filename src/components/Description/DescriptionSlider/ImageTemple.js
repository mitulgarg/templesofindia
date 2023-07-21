import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ImageTemple.css'; 

const ImageRender = ({ text }) => {
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



    const imageSources = {
        "First slide": temples.temple_image,
        "Second slide": temples.temple_image2,
        "Third slide": temples.temple_image3,
      };
    
      const imageSrc = imageSources[text];
   
  return (
    <div>
        <img 
        src={imageSrc}
        alt={text} 
        class="img"
        />
    </div>
  );
};

export default ImageRender;
