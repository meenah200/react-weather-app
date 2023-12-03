import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from './WeatherIcon';

import './Weather'

export default function WeatherInfo(props){
  return (
  <div className="WeatheInfo">
    <h1>{props.info.city}</h1>
      <ul>
        <li>
            <FormatDate date ={props.info.date} />      
          </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <br />
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
          <div className="float-left">
            <WeatherIcon code={props.info.icon} 
          alt ={props.info.description} />
          </div>
            <WeatherTemperature celcius={props.info.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/363/original/icons8-humidity-32.png?1698661745" 
              alt="humidity-icon" 
              width="20px" />
              Humidity: {props.info.humidity}%</li>
            <li>
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/364/original/icons8-wind-64.png?1698661902" 
              alt="Wind-icon" 
              width="20px" />
                 Wind: {Math.round(props.info.wind)} Km/h</li>
          </ul>
        </div>
      </div>
  </div>
  );
}