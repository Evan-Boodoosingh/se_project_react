import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ clothingItems, onViewItem, onLike, currentUser, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  // Convert F to C if needed
  const tempF = weatherData.temp.F;
  const tempC = weatherData.temp.C
  const displayTemp = currentTempUnit === "C" ? weatherData.temp.C : weatherData.temp.F;

  // const weatherType = getWeatherCondition(tempF);

  // Filter items based on weather condition
  const filteredItems = clothingItems.filter(
    (item) => item.weather && item.weather.toLowerCase() === weatherData.condition
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
              onLike={onLike}
              currentUser={currentUser}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
