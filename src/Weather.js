import React from "react";

import './Weather.css';

export default function Weather(){
  return(
    <div className="Weather">

      <form>
        <div className="row">
          <div className="col-9">
        <input 
        type="search" 
        placeholder="Enter a city..."  
        className="form-control" />
        </div>
        <div className="col-3">
        <input 
        type="submit" 
        value="search" 
        className="btn btn-primary" />
        </div>
        </div>
      </form>
      <h1>Victoria Island</h1>
      <ul>
        <li>Last updated: </li>
        <li> Wednesday 03:03</li>
        <li>Overcast clouds</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy"/> 
          83°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 39%</li>
            <li>Humidity: 83%</li>
            <li>Wind: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  )
}