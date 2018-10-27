import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from './../actions';

/* eslint-disable */

export const cities = (state = {}, action) =>{
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { forecastData, weather: null }};
        default:
            return state;
    }
}

/* eslint-enable */

export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);