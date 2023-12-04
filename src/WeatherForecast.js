import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';

export default function WeatherForecast() {
  return (
    <div className ="WeatherForecast">
    <div className ="row mt-4">
      <div className ="col">
       <div classNmae="WeatherForecast-day">
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

      <div className ="col">
       <div classNmae="WeatherForecast-day">
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

      <div className ="col">
       <div classNmae="WeatherForecast-day">
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

      <div className ="col">
       <div classNmae="WeatherForecast-day">
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

      <div className ="col">
       <div classNmae="WeatherForecast-day">
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