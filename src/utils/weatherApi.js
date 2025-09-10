import { coordinates, apiKey } from "./constants";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(`Error from weather API: ${res.status}`);
    })
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parsedData = { temp: {} };

  parsedData.city = data.name;
  parsedData.temp.F = Math.round(data.main.temp);
  parsedData.temp.C = Math.round(((data.main.temp - 32) * 5) / 9);
  parsedData.condition = getWeatherCondition(parsedData.temp.F);
  parsedData.WeatherCondition = data.weather[0].main.toLowerCase();
  parsedData.isDay = isDay(data.sys, Date.now());

  return parsedData;
}

export function getWeatherCondition(temperature) {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 70) {
    return "warm";
  } else {
    return "cold";
  }
}

function isDay({ sunrise, sunset }, timeStamp) {
  const timeStampInSeconds = timeStamp / 1000;
  return sunrise < timeStampInSeconds && timeStampInSeconds < sunset;
}
