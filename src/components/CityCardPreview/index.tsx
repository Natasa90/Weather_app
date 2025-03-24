import './city-card-preview.css';
import { FC } from "react";
import { WeatherCard } from "../WeatherCard";
import { CityCardPreviewProps } from "../../types";

export const CityCardPreview: FC<CityCardPreviewProps> = ({ city, handleAddCity }) => {
  return (
    <div className="weather-card-item">
      <WeatherCard
        city={city.city}
        temperatureCelsius={city.temperatureCelsius}
        temperatureFahrenheit={city.temperatureFahrenheit}
        condition={city.condition}
        conditionIcon={city.conditionIcon}
        humidity={city.humidity}
        windSpeed={city.windSpeed}
      />
      <button onClick={() => handleAddCity(city)} className="add-city-button">
        Add City
      </button>
    </div>
  );
};
