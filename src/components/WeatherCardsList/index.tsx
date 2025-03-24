import { FC } from "react";
import { WeatherCard } from "../WeatherCard";
import { WeatherCardsListProps } from "../../types";

export const WeatherCardList: FC<WeatherCardsListProps> = ({
    filteredCities,
    handleRemoveCity,
    isCelsius,
    toggleTemperature,
}) => {
    return (
        <div className="weather-cards">
            {filteredCities.map((city) => (
                <div key={city.city} className="weather-card-item">
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
                        onClick={() => handleRemoveCity(city)}
                        className="remove-city-button"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};
