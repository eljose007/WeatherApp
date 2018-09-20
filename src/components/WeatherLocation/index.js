import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import './styles.css';

// const data2 = {
//   temperature: 15,
//   weatherState: WINDY,
//   humidity: 20,
//   wind: '18 m/s',
// };

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city: 'Buenos Aires',
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () =>{
    fetch(api_weather).then ( resolve => {
      return resolve.json();
    }).then( data => {
      console.log("resultado handleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather);
      this.setState({
        data: newWeather,
      });

    });
    // this.setState({
    //   data: data2,
    // })
  }
  render (){
    console.log("render");
    const { city, data } = this.state;
    return (<div className="weatherLocationCont">
        <Location city={city}></Location>
        { data ?
          <WeatherData data={data}></WeatherData> :
          "Cargando..."
        }
    </div>);
  }
};

export default WeatherLocation;
