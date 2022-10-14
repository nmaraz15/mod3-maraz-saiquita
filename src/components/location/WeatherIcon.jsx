import React from "react";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import "./WeatherIcon.css";

const WeatherIcon = ({ iconCode }) => {
  console.log(iconCode);
  return setIcono(iconCode);
};

export default WeatherIcon;

let setIcono = (iconImg) => {
  switch (iconImg) {
    case (95, 96, 99):
      return (
        <div className="weather__icon">
           <small>Storm</small>
          <TiWeatherStormy className="weather__icon__icon" />
         
        </div>
      );
    case (51, 53, 55, 56, 57):
      return (
        <div className="weather__icon">
          <small>Drizzle</small>
          <TiWeatherShower className="weather__icon__icon" />
          
        </div>
      );
    case (61, 63, 65):
      return (
        <div className="weather__icon">
          <small>Rain</small>
          <TiWeatherDownpour className="weather__icon__icon" />
          
        </div>
      );
    case (71, 73, 75, 77):
      return (
        <div className="weather__icon">
          <small>Snow</small>
          <TiWeatherSnow className="weather__icon__icon" />
          
        </div>
      );
    case (0, 1):
      return (
        <div className="weather__icon">
          <small>Sunny</small>
          <TiWeatherSunny className="weather__icon__icon" />
          
        </div>
      );
    case (45, 48):
      return (
        <div className="weather__icon">
          <small>Atmosphere</small>
          <TiWeatherCloudy className="weather__icon__icon" />
          
        </div>
      );
    case (2, 3):
      return (
        <div className="weather__icon">
          <small>Foggy</small>
          <TiWeatherCloudy className="weather__icon__icon" />
          
        </div>
      );
    default:
      return (
        <div className="weather__icon">
          <small>Variable</small>
          <TiWeatherPartlySunny className="weather__icon__icon" />
          
        </div>
      );
  }
};
