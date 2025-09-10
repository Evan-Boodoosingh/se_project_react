import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { weatherConditionsImages } from "../../utils/constants";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const tempUnit = useContext(CurrentTemperatureUnitContext);

  // Convert F to C if needed
  const tempF = weatherData.temp.F;
  const tempC = Math.round(((tempF - 32) * 5) / 9);
  const displayTemp = tempUnit.currentTempUnit === "C" ? tempC : tempF;

  // Use the parsed isDay data from weatherApi
  const timeOfDay = weatherData.isDay ? "day" : "night";

  return (
    <section className="weather-card">
      <img
        src={
          weatherConditionsImages[timeOfDay][weatherData.WeatherCondition]
            ?.image || weatherConditionsImages[timeOfDay]["default"]?.image
        }
        alt={weatherData.WeatherCondition}
        className="weather-card__banner"
      />
      <p className="weather-card__temp">
        {displayTemp}° {tempUnit.currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
