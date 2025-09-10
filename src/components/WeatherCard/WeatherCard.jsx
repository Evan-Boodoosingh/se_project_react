import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import banner from "../../assets/banner.svg";
import { weatherConditionsImages } from "../../utils/constants";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const tempUnit = useContext(CurrentTemperatureUnitContext);

  // Convert F to C if needed
  const tempF = weatherData.temp.F;
  const tempC = Math.round(((tempF - 32) * 5) / 9);
  const displayTemp = tempUnit.currentTempUnit === "C" ? tempC : tempF;

  return (
    <section className="weather-card">
      <img
        src={weatherConditionsImages["day"][weatherData.getWeatherCondition]?.image}
        alt={weatherData.getWeatherCondition}
        className="weather-card__banner"
      />
      <p className="weather-card__temp">
        {displayTemp}° {tempUnit.currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
