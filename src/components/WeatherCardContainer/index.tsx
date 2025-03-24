import './container.css'
import { useState, useEffect, ChangeEvent } from "react";
import { mockWeatherData } from "../../mockData/mockWeatherData";
import { WeatherData } from "../../types";
import { SearchBar } from "../SearchBar";
import { CityDropdown } from "../CityDropDown";
import { CityCardPreview } from "../CityCardPreview";
import { WeatherCardList } from "../WeatherCardsList";
import { ErrorMessage } from "../ErrorMessage";

export const WeatherCardContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string>("");
  const [searchResults, setSearchResults] = useState<WeatherData[]>([]);
  const [previewCity, setPreviewCity] = useState<WeatherData | null>(null);

  useEffect(() => {
    const savedCities = localStorage.getItem("filteredCities");
    if (savedCities) {
      setFilteredCities(JSON.parse(savedCities));
    } else {
      setFilteredCities([mockWeatherData[0], mockWeatherData[5]]);
    }
  }, []);

  useEffect(() => {
    if (filteredCities.length > 0) {
      localStorage.setItem("filteredCities", JSON.stringify(filteredCities));
    }
  }, [filteredCities]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError("Please add a city");
      setSearchResults([]);
      return;
    }

    const isCityAlreadyAdded = filteredCities.some(
      (city) => city.city.toLowerCase() === searchQuery.toLowerCase()
    );

    if (isCityAlreadyAdded) {
      setError("The city is already in the list");
      setSearchResults([]);
      return;
    }

    const results = mockWeatherData.filter((city) =>
      city.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length === 0) {
      setError("No city found");
      setSearchResults([]);
    } else {
      setError("");
      setSearchResults(results);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setError("");
    setPreviewCity(null);

    if (e.target.value.trim() === "") {
      setSearchResults([]);
    } else {
      const results = mockWeatherData.filter(
        (city) =>
          city.city
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) &&
          !filteredCities.some(
            (filteredCity) =>
              filteredCity.city.toLowerCase() === city.city.toLowerCase()
          )
      );
      setSearchResults(results);
    }
  };

  const handlePreviewCity = (city: WeatherData) => {
    const isCityAlreadyAdded = filteredCities.some(
      (existingCity) =>
        existingCity.city.toLowerCase() === city.city.toLowerCase()
    );

    if (isCityAlreadyAdded) {
      setError("The city is already in your list.");
      setPreviewCity(null);
      setSearchResults([]);
    } else {
      setError("");
      setPreviewCity(city);
      setSearchResults([]);
      setSearchQuery("");
    }
  };

  const handleAddCity = (city: WeatherData) => {
    setFilteredCities((prevCities) => {
      if (!prevCities.some((prevCity) => prevCity.city === city.city)) {
        return [...prevCities, city];
      }
      return prevCities;
    });

    setPreviewCity(null);
  };

  const handleRemoveCity = (city: WeatherData) => {
    setFilteredCities((prevCities) =>
      prevCities.filter((prevCity) => prevCity.city !== city.city)
    );
  };

  return (
    <div className="weather-card-container">
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />
      <ErrorMessage error={error} />
      {searchQuery.trim() && searchResults.length > 0 && (
        <CityDropdown
          searchResults={searchResults}
          handlePreviewCity={handlePreviewCity}
          onClose={() => setSearchResults([])}
        />
      )}
      {previewCity && (
        <CityCardPreview
          city={previewCity}
          handleAddCity={handleAddCity}
        />
      )}
      <WeatherCardList
        filteredCities={filteredCities}
        handleRemoveCity={handleRemoveCity}
      />
    </div>
  );
};
