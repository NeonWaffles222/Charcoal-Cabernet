import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class MapContainer extends Component {
  handleMarkerClick = () => {
    const lat = 49.226846; // Restaurant location latitude
    const lng = -123.090507; // Restaurant location longitude

    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  render() {
    const mapStyles = {
      width: '700px',
      height: '500px',
    };

    const restaurantPosition = { lat: 49.226846, lng: -123.090507 };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={restaurantPosition}
      >
        <Marker
          title="Charcoal & Cabernet"
          name="Charcoal & Cabernet"
          position={restaurantPosition}
          onClick={this.handleMarkerClick}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8-iuxfmhdZFyf8SikL-hJ9LRgPUO70-M',
})(MapContainer);
