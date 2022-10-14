import { GoTrashcan } from "react-icons/go";
import { useEffect, useContext, useState } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";
import "./location.css";

import WeatherIcon from "./WeatherIcon";

const Location = ({ location }) => {
  const { id, name, latitude, longitude, current_weather, imagen } =
    location;
  const { tarjeta, setTarjeta } = useContext(LocationContext);

   const handleLocation = () => {
     setTarjeta(
      tarjeta.filter((loc) => loc.id !== id) //!==
    );
  };

  return (
  
<div className="card__father">
                <div className="card">
                    <div className="card__front" style={{ backgroundImage: `url(${imagen})` }} alt="img">            
                    
                        <div className="bg"></div>
                        <div className="body__card_front">
                         
                            <h1 className="titleFront">{name}</h1>
                        </div>

                    </div>
                    
                    <div className="card__back">
                        <div className="body__card_back">
                        
                        <WeatherIcon iconCode={current_weather.weathercode} />
        
                            <p>Latitude: {latitude}</p>
                            <p>Longitude: {longitude} </p>
                            <p>Temperature: {current_weather.temperature}° </p>
                            <p>Wind Speed: {current_weather.windspeed}km/h </p>
                            
                        </div>

                        <div className="location-actions">
                <div className="del" onClick={handleLocation}>
        <GoTrashcan />
        </div>
        </div>

                    </div>
                    
                </div>
            </div>
 



  );
};

export default Location;
