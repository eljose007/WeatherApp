const location = "Buenos Aires,ar";
const api_key = "238026dc251a1f0f0c16d1f8c457d55f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
