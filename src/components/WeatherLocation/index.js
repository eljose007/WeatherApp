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

class WeatherLocation extends Component {
  constructor(props){
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleUpdateClick = () =>{
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then ( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      this.setState({
        data: newWeather,
      });

    });
    // this.setState({
    //   data: data2,
    // })
  }
  render (){
    const {onWeatherLocationClick} = this.props;
    const { city, data } = this.state;
    return (<div className="weatherLocationCont"  onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        { data ?
          <WeatherData data={data}></WeatherData> :
          <CircularProgress size={50}/>
        }
    </div>);
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
