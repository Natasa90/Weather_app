import { ChangeEvent } from "react";

export interface WeatherData {
  city: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  condition: string;
  conditionIcon: string;
  humidity: number;
  windSpeed: number;
}

export interface WeatherCardProps {
  city: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  condition: string;
  conditionIcon: string;
  humidity: number;
  windSpeed: number;
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
}

export interface WeatherCardsListProps {
  filteredCities: WeatherData[];
  handleRemoveCity: (city: WeatherData) => void;
}

export interface ErrorMessageProps {
  error: string;
}
