import './city-dropdown.css';
import { FC, useEffect, useRef } from "react";
import { CityDropdownProps } from "../../types";

export const CityDropdown: FC<CityDropdownProps> = ({ searchResults, handlePreviewCity, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {searchResults.map((city) => (
        <div
          key={city.city}
          className="dropdown-item"
          onClick={() => handlePreviewCity(city)}
        >
          {city.city}
        </div>
      ))}
    </div>
  );
};
