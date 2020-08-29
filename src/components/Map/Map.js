import React from "react"
import PropTypes from "prop-types"
import GoogleMapReact from "google-map-react"

const ZOOM = 11

const Map = ({ zoom, lng, lat }) => {
  const center = {
    lat,
    lng,
  }
  return (
    <div className="w-64 h-64 mt-4">
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
  lng: 0,
  lat: 0,
}

Map.propTypes = {
  zoom: PropTypes.number,
  lng: PropTypes.number,
  lat: PropTypes.number,
}

export default Map
