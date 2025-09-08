import "./Main.css";
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';

function Main({ clothingItems, onViewItem, weatherData }) {
  return <main className="main">
   <WeatherCard />
   <p className="main__text">Today is {weatherData.temp}°F / you may want to wear:</p>
<ul className="main__card-list"> {clothingItems.map((item) => {
       return <ItemCard key={item._id} data={item} onClick={() => onViewItem(item)} />;
     })}
 </ul>
</main>;
}

export default Main;
