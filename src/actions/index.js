import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const api_key = "238026dc251a1f0f0c16d1f8c457d55f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_weather}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de búsqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el restultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));

            }
        );
    }
};