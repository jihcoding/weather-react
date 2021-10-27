import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherCelsius";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <div className="FormatDate">
          <p>
            <FormatDate date={props.data.date} />
          </p>
        </div>
      </div>
      <div className="row col-6">
        <div className="clearfix weather-temperature">
          <div className="float-right">
            <WeatherIcon code={props.data.icon} size={59} />
            <WeatherTemperature celsius={props.data.temperature} />
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
