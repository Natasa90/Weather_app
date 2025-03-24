import { ChangeEvent } from "react";

export interface WeatherData {
    city: string;
    temperature: {
        celsius: number;
        fahrenheit: number;
    };
    condition: string;
    conditionIcon: string;
    humidity: number;
    windSpeed: number;
}

export interface WeatherCardProps extends WeatherData {
    isCelsius: boolean;
    toggleTemperature: () => void;
}

export interface SearchBarProps {
    searchQuery: string;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}

export interface CityDropdownProps {
    searchResults: WeatherData[];
    handlePreviewCity: (city: WeatherData) => void;
    onClose: () => void;
}

export interface CityCardPreviewProps {
    city: WeatherData;
    handleAddCity: (city: WeatherData) => void;
    isCelsius: boolean;
    toggleTemperature: () => void;
}

export interface WeatherCardsListProps {
    filteredCities: WeatherData[];
    handleRemoveCity: (city: WeatherData) => void;
    isCelsius: boolean;
    toggleTemperature: () => void;
}

export interface ErrorMessageProps {
    error: string;
}
