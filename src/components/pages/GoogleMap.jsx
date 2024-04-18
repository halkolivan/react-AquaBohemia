import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapComponent = ({ apiKey }) => (
  <div style={{ height: "400px", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={{ lat: 47.016, lng: 28.84 }}
      defaultZoom={11}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  </div>
);
export default GoogleMapComponent;
