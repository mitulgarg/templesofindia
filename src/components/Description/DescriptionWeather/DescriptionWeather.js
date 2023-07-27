import React, { useState, useEffect } from "react";
import "./DescriptionWeather.css"

function DescriptionWeather({ props }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setWeather(props);
    console.log(props);
  }, []);

  return (
    <div >
      {
        weather && <header >
          {typeof weather.main !== "undefined" ? (
            <div className="cardweather">
              {/* Location  */}
              <p className="city">Weather in {weather.name} </p>
              {/* Temperature Celsius  */}
              <p class="temperature">{weather.main.temp}°C</p>
              {/* Condition */}
              <p class="weather">{weather.weather[0].main}</p>
              <p class="description">({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
        </header>
      }
    </div>
  );
}

export default DescriptionWeather;






























// import React, { useState } from 'react';

// function DescriptionWeather() {
//   const [location, setLocation] = useState(null);
//   const [weather, setWeather] = useState(null);

//   function Location() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }

//   async function  success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     setLocation({ latitude, longitude });
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

//     // Make API call to OpenWeatherMap
//   await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=<2fb0bedfcc179de1f854f9bc6bd61fd1>&units=metric`)
//     // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2fb0bedfcc179de1f854f9bc6bd61fd1`)

//     .then(response => response.json())
//       .then(data => {
//         setWeather(data);
//         console.log(data);
//       })
//       .catch(error => console.log(error));
//   }

//   function error() {
//     console.log("Unable to retrieve your location");
//   }

//   Location()
//   return (
//     <div>

//         <div>
//           <p>Location: {weather.name}</p>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//     </div>
//   );
// }

// export default DescriptionWeather;