import banner from "../../assets/banner.svg";
import "./WeatherCard.css";

function WeatherCard() {
  return <section className="weather-card">
    <img src={banner} alt="Weather Banner" className="weather-card__banner" />
    <p className="weather-card__temp">75° F</p>
  </section>;
}

export default WeatherCard;