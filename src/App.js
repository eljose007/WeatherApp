import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

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
            <LocationListContainer 
              cities={cities}>
            </LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
              {
                city && 
                <ForecastExtendedContainer></ForecastExtendedContainer>                
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
