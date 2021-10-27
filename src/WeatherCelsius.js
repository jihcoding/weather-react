import React from "react";

export default function WeatherCelsius(props) {
  return (
    <div className="WeatherCelsius">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">
        <span> °C </span>
      </span>
    </div>
  );
}
