import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';

// const data2 = {
//   temperature: 15,
//   weatherState: WINDY,
//   humidity: 20,
//   wind: '18 m/s',
// };






const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
     <div className="weatherLocationCont"  onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        { data ?
          <WeatherData data={data}></WeatherData> :
          <CircularProgress size={50}/>
        }
    </div>
)

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default WeatherLocation;
