import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ clothingItems, onViewItem, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  // Convert F to C if needed
  const tempF = weatherData.temp.F;
  const tempC = Math.round(((tempF - 32) * 5) / 9);
  const displayTemp = currentTempUnit === "C" ? tempC : tempF;

  const weatherType = getWeatherCondition(tempF);

  // Filter items based on weather condition
  const filteredItems = clothingItems.filter(
    (item) => item.weather && item.weather.toLowerCase() === weatherType
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {displayTemp}°{currentTempUnit} / you may want to wear:
      </p>
      <ul className="main__card-list">
        {filteredItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onClick={() => onViewItem(item)}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
