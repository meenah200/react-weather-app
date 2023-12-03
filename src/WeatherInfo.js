import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

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
          <div className="clearfix">
          <img 
          src={props.info.iconUrl} 
          alt={props.info.description} 
          className="float-start"
          /> 
          <div className="float-left">
            <WeatherTemperature celcius={props.info.temperature} />
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} Km/h</li>
          </ul>
        </div>
      </div>
  </div>
  );
}