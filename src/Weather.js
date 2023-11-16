import React, {useState} from "react";
import axios from "axios";
import { Circles } from 'react-loader-spinner';
import FormatDate from "./FormatDate";
import './Weather.css';

export default function Weather(props){
  const[weatherData, setWeatherData] = useState({loaded: false});
  
  function handleSubmit(response){
    console.log(response.data.time)
    setWeatherData ({
      loaded:true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      feels_like: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed, 
      description: response.data.condition.description,
     iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
    });
  }
  
  if(weatherData.loaded){
  return(
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input 
        type="search" 
        placeholder="Enter a city..."  
        className="form-control" 
        autoFocus="on"/>
        </div>
        <div className="col-3">
        <input 
        type="submit" 
        value="search" 
        className="btn btn-primary w-100" />
        </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
            <FormatDate date ={weatherData.date} />      
          </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <br />
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img 
          src={weatherData.iconUrl} 
          alt={weatherData.description} 
          className="float-start"
          /> 
          <div className="float-left">
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="units">°C</span>
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels-like: {Math.round(weatherData.feels_like)}%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey ="4f67eab3tc66470aeo7b6631bb16f543";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(handleSubmit);

  return (
    <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  );
}
}