import { FC } from "react";
import { WeatherCardProps } from "../../types";

export const WeatherCard: FC<WeatherCardProps> = ({
  city,
  temperatureCelsius,
  temperatureFahrenheit,
  condition,
  conditionIcon,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="weather-card">
      <div className="weather-info">
        <h2>{city}</h2>
        <p>
          Temperature: {temperatureCelsius}°C ({temperatureFahrenheit}°F)
        </p>
        <p>
          Condition: {condition} {conditionIcon}
        </p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} km/h</p>
      </div>
    </div>
  );
};
