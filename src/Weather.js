import React, {useState} from "react";
import axios from "axios";
import { Circles } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import './Weather.css';

export default function Weather(props){
  const [city, setCity] = useState(props.defaultCity);
  const[weatherData, setWeatherData] = useState({loaded: false});
  
  function handleResponse(response){
    console.log(response.data.condition.icon_url)
    setWeatherData ({
      loaded:true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed, 
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      //iconUrl:`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    });
  }

    function search(){
  const apiKey ="4f67eab3tc66470aeo7b6631bb16f543";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(handleResponse);
    }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event){
    setCity(event.target.value);
  }

  if(weatherData.loaded){
  return(
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input 
        type="search" 
        placeholder="Enter a city..."  
        className="form-control" 
        autoFocus="on"
        onChange={handleCityChange}/>
        </div>

        <div className="col-3">
        <input 
        type="submit" 
        value="search" 
        className="btn btn-primary w-100" />
        </div>
        </div>
      </form>
      < WeatherInfo info={weatherData} />
      <WeatherForecast />     
    </div>
  );
} else {
  search();
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