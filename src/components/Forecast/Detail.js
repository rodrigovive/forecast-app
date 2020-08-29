import React from "react"
import PropTypes from "prop-types"
import ItemForecast from "./ItemForecast"

const Detail = ({
  temperature,
  pressure,
  humidity,
  maxTemperature,
  minTemperature,
  name,
}) => {
  return (
    <div className="w-full px-4 mt-4 md:w-2/3">
      <h3 className="text-xl font-bold">Forecast in {name}:</h3>
      <ItemForecast name="Temperature" value={temperature} />
      <ItemForecast name="Pressure" value={pressure} />
      <ItemForecast name="humidity" value={humidity} />
      <ItemForecast name="Max temperature" value={maxTemperature} />
      <ItemForecast name="Min temperature" value={minTemperature} />
    </div>
  )
}

Detail.defaultProps = {
  temperature: "",
  pressure: "",
  humidity: "",
  maxTemperature: "",
  minTemperature: "",
  name: "",
}

Detail.propTypes = {
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pressure: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxTemperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minTemperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Detail
