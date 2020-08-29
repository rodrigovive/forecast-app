import React from "react"
import PropTypes from "prop-types"
import GoogleMapReact from "google-map-react"
import { useForecastState } from "../../context/forecast"

const ZOOM = 11

const Map = ({ zoom }) => {
  const { current: stateForecast } = useForecastState()
  const center = {
    lat: stateForecast.coord.lat,
    lng: stateForecast.coord.lon,
  }
  return (
    <div style={{ height: "300px", width: "300px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        center={center}
        defaultZoom={zoom}
      />
    </div>
  )
}

Map.defaultProps = {
  zoom: ZOOM,
}

Map.propTypes = {
  zoom: PropTypes.number,
}

export default Map
