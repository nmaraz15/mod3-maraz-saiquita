import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import "./CardDisplay.css";
import WeatherIcon from "../../components/location/WeatherIcon";
import { FaWind } from "react-icons/fa";

const CardDisplay = () => {
  const { id } = useParams();
  const { tarjeta } = useContext(LocationContext);
  const [weather] = tarjeta.filter((weather) => weather.id === Number(id));
  console.log("detalles " + JSON.stringify(weather));

  
  return (
    <section className="weather__details__container ">
      <div className="current__weather ">
        <div className="titles__container">
          <h1 className="title ">{weather.name}</h1>
          <div className="subtitle">
            <small>Latitude: {weather.latitude}</small>
            <small>Longitude: {weather.longitude}</small>
          </div>
        </div>

        <div className="data ">
          <div className="temp__icon">
            <h2 className="temp ">{weather.current_weather.temperature}°</h2>
            <h2>
              <WeatherIcon iconCode={weather.current_weather.weathercode} />
            </h2>
            <h2 className="windspeed">
              <FaWind />
              {weather.current_weather.windspeed} km/h
            </h2>
          </div>
          <div className="">
            <div className="img__container">
              <img className="image " src={weather.imagen} alt="" />
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};
export default CardDisplay;
