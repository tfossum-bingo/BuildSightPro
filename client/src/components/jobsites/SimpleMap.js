import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{color: 'red', fontWeight: "bold"}}>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD85Z18nGa_s6LWTdVZCmozaVWFRqHM8KQ', language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Jobsite"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;