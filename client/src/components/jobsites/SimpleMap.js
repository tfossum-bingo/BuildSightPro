import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faTools } from "@fortawesome/free-solid-svg-icons";
 
const AnyReactComponent = ({ text }) => <div style={{color: 'darkred', fontWeight: "bold"}}>
                  <FontAwesomeIcon
                className="fas fa-white jobsite-wrench"
                icon={faTools}
            />
</div>;
 
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
      // <div style={{ height: '75vh', width: '50%' }}>
      <div className='jobsite-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD85Z18nGa_s6LWTdVZCmozaVWFRqHM8KQ', language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            // text="Jobsite"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;