import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList'
import './App.css';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Montevideo,uy',
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {

  constructor(){
    super();
    this.state = { city: null};

  }
  handleSelectedLocation = city => {
    this.setState({ city });
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
              {
                city && 
                <ForecastExtended city={city}></ForecastExtended>                
              }
                
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      // <div className="App">
      //   <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>/>
      // </div>
    );
  }
}

export default App;
