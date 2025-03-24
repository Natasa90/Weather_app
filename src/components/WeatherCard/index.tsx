import { FC, useState } from "react";
import { WeatherCardProps } from "../../types";

export const WeatherCard: FC<WeatherCardProps> = ({
    city,
    temperature,
    condition,
    conditionIcon,
    humidity,
    windSpeed,
    isCelsius,
}) => {
    return (
        <div className="weather-card">
            <div className="weather-info">
                <h2>{city}</h2>
                <p>
                    Temperature:{" "}
                    {isCelsius ? temperature.celsius : temperature.fahrenheit}°
                    {isCelsius ? "C" : "F"}
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
