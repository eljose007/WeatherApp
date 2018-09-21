import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {
  /*handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };*/
  render() {
    return (

      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="red"></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="green"></div>
            </Col>
            <Col xs={12} sm={8} md={4}>
              <div className="blue"></div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>


      /*<div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>/>
    </div>*/
    );
  }
}

export default App;
