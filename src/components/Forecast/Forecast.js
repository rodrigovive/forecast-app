import React from "react"
import NotFound from "../NotFound"
import Map from "../Map"
import Detail from "./Detail"
import { useForecastState } from "../../context/forecast"

const Forecast = () => {
  const stateForecast = useForecastState()
  const { main, error, name, coord } = stateForecast.current
  return error ? (
    <NotFound />
  ) : (
    <>
      {name && (
        <Detail
          name={name}
          temperature={main?.temp}
          pressure={main?.pressure}
          humidity={main?.humidity}
          maxTemperature={main?.temp_max}
          minTemperature={main?.temp_min}
        />
      )}
      <Map lat={coord.lat} lng={coord.lon} />
    </>
  )
}

export default Forecast
