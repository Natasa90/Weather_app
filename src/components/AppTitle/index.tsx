import './app-title.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons"; 

export const AppTitle = () => {
  return (
    <div className="app-title">
      <FontAwesomeIcon icon={faSun} className="icon" />
      <h1 className="title">Weather App</h1>
    </div>
  );
};
