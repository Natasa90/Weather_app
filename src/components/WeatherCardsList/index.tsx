import { FC } from "react";
import { WeatherCard } from "../WeatherCard";
import { WeatherCardsListProps } from "../../types";

export const WeatherCardList: FC<WeatherCardsListProps> = ({ filteredCities, handleRemoveCity }) => {
  return (
    <div className="weather-cards">
      {filteredCities.map((city) => (
        <div key={city.city} className="weather-card-item">
          <WeatherCard
            city={city.city}
            temperatureCelsius={city.temperatureCelsius}
            temperatureFahrenheit={city.temperatureFahrenheit}
            condition={city.condition}
            conditionIcon={city.conditionIcon}
            humidity={city.humidity}
            windSpeed={city.windSpeed}
          />
          <button onClick={() => handleRemoveCity(city)} className="remove-city-button">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
