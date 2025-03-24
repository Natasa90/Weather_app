import { FC } from "react";
import { SearchBarProps } from "../../types";

export const SearchBar: FC<SearchBarProps> = ({ searchQuery, handleSearchChange, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a city..."
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};
