import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
      };
    render() {
        return (
            <LocationList 
              cities={this.props.cities} 
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
  });

export default connect(null, mapDispatchToProps)(LocationListContainer);