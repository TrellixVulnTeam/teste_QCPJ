import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './style.css';


export class Mapa extends Component {

  render() {
    return (
      <div id="mapa">
        <Map
          google={this.props.google}
          zoom={20}
          initialCenter={{ lat: -19.9186153, lng:  -43.9374373 }}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyA7wn5qnZgHtnoNfQEFO0hZKXBylSa0Mlk',
  }
))(Mapa)