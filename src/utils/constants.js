const coordinates = { lat: "28.2804877", lon: "-81.676041" };
const apiKey = "b3db5741dc986cd3ff31d13a579692b1";

const weatherConditionsImages = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/day/cloudy.png", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/day/fog.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.png", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/day/storm.png", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/night/cloudy.png", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/night/fog.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.png", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/night/storm.png", import.meta.url).href,
    },
  },
};

export { coordinates, apiKey, weatherConditionsImages };
