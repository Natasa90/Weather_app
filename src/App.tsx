import "./App.css";
import { AppTitle } from "./components/AppTitle";
import { Footer } from "./components/Footer";
import { WeatherCardContainer } from "./components/WeatherCardContainer";

function App() {
    return (
        <div className="App">
            <AppTitle />
            <WeatherCardContainer />
            <Footer />
        </div>
    );
}

export default App;
