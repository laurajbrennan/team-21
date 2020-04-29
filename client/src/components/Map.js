import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "300px",
      margin: "20px 0 50px 0",
    };
    return (
      <>
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{ lat: 43.8, lng: -79.19 }}
        >
          <Marker position={{ lat: 43.651112, lng: -79.366333 }} />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAlp8hHS_huCnkodkFqmj9p1TQG__8_JlA",
})(MapContainer);
