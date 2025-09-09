import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';

function Main({ clothingItems, onViewItem, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  return <main className="main">
   <WeatherCard weatherData={weatherData} />
   <p className="main__text">Today is {weatherData.temp}°{currentTempUnit} / you may want to wear:</p>
<ul className="main__card-list"> {clothingItems.map((item) => {
       return <ItemCard key={item._id} data={item} onClick={() => onViewItem(item)} />;
     })}
 </ul>
</main>;
}

export default Main;
