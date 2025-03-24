import "./city-card-preview.css";
import { FC } from "react";
import { WeatherCard } from "../WeatherCard";
import { CityCardPreviewProps } from "../../types";

export const CityCardPreview: FC<CityCardPreviewProps> = ({
    city,
    handleAddCity,
    isCelsius,
    toggleTemperature,
}) => {
    return (
        <div className="weather-card-item">
            <WeatherCard
                city={city.city}
                temperature={{
                    celsius: city.temperature.celsius,
                    fahrenheit: city.temperature.fahrenheit,
                }}
                condition={city.condition}
                conditionIcon={city.conditionIcon}
                humidity={city.humidity}
                windSpeed={city.windSpeed}
                isCelsius={isCelsius}
                toggleTemperature={toggleTemperature}
            />
            <button
                onClick={() => handleAddCity(city)}
                className="add-city-button"
            >
                Add City
            </button>
        </div>
    );
};
