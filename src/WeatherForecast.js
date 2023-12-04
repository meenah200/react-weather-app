import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {

function sendResponse (response) {
}
  let apiKey ="4f67eab3tc66470aeo7b6631bb16f543";
  let longitude =props.coordinates.lon;
  let latitude =props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(sendResponse);

  return (
    <div className ="WeatherForecast">
    <div className ="row mt-4">
      <div className ="col">
       <div className="WeatherForecast-day">
        Thur
        </div>
        <WeatherIcon code="clear-sky-day" size={36} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            19°
            </span>
          <span className="WeatherForecast-temperature-min">
            10°
            </span>
          </div>
      </div>
    </div>
  </div>
  )
}