import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days= [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}
*/
export const api_key = "238026dc251a1f0f0c16d1f8c457d55f";
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";


class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        // fetch or axios
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}
        ></ForecastItem>) )
    }

    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (<div>
                    <h2 className="forecast-title">Pronostico Extendido para {city} </h2>
                    {forecastData? 
                        this.renderForecastItemDays(forecastData):
                        this.renderProgress()
                    }
                </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;