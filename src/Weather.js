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
      <h1>Victoria Island</h1>
      <ul>
        <li>Last updated: </li>
        <li> Wednesday 03:03</li>
        <li>Overcast clouds</li>
      </ul>
      <br />
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img 
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" 
          alt="sunny cloudy" 
          className="float-start"
          /> 
          <div className="float-left">
          <span className="temperature">8</span>
          <span className="units">°C</span>
          </div>
          </div>
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