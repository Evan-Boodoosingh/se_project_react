import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import banner from "../../assets/banner.svg";
import "./WeatherCard.css";



function WeatherCard({ weatherData }) {

  const tempUnit = useContext(CurrentTemperatureUnitContext);

  return <section className="weather-card">
    {tempUnit}
    <img src={banner} alt="Weather Banner" className="weather-card__banner" />
    <p className="weather-card__temp">{weatherData.temp}° F</p>
  </section>;
}

export default WeatherCard;