import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

function sendResponse (response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded) {
  console.log(forecast);
   return (
    <div className ="WeatherForecast">
    <div className ="row mt-4">
      <div className ="col">
       <WeatherForecastDay info ={forecast[0]} />
      </div>
    </div>
  </div>
  );
} else {
  let apiKey ="4f67eab3tc66470aeo7b6631bb16f543";
  let longitude =props.coordinates.longitude;
  let latitude =props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(sendResponse);

  return null;
   }
}