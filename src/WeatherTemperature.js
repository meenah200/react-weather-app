import React, {useState} from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  
  function fahrenheitDisplay(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celciusDisplay(event){
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit () {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
  return (
    <div className ="WeatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="units">
          °C |{""}
        <a href="/" onClick={fahrenheitDisplay}>
          °F 
          </a>
          </span>
    </div>
  )
  } else {
    return (
      <div className ="WeatherTemperature">
      <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={celciusDisplay}>
            °C 
            </a>
           {""}| °F 
          </span>
    </div>
  )
  }
}