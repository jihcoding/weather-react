import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherCelsius";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <div className="FormattedDate">
          <FormatDate date={props.data.date} />
        </div>
      </div>
      <div>
        <div className="temperature-container d-flex justify-content-end">
          <WeatherIcon code={props.data.icon} size={55} />
          <div className="float-left weather-temperature ">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <ul>
          <li>{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
