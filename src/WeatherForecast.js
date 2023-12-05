import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(()=> {
setLoaded(false);
  }, [props.coordinates]);

function sendResponse (response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

function load() {
   let apiKey ="4f67eab3tc66470aeo7b6631bb16f543";
  let longitude =props.coordinates.longitude;
  let latitude =props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(sendResponse);

  return null;
}

if (loaded) {
   return (
    <div className ="WeatherForecast">
    <div className ="row mt-4">
      {forecast.map(function (dailyForecast, index) {
        if (index < 5) {
          return (
            <div className ="col" key={index}>
            <WeatherForecastDay info ={dailyForecast} />
      </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  </div>
  );
} else {
 load();
   }
}