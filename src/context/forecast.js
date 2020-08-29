import React from "react"
import PropTypes from "prop-types"
import { UPDATE_SEARCHED_CITIES } from "./searchedCities"

const UPDATE_FORECAST = "UPDATE_FORECAST"
const NOT_FOUND = "NOT_FOUND"

const initialState = {
  main: {
    feels_like: undefined,
    humidity: undefined,
    pressure: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
  },
  coord: {
    lat: undefined,
    lon: undefined,
  },
  name: undefined,
  error: undefined,
}

const ForecastStateContext = React.createContext()
const ForecastDispatchContext = React.createContext()

const useForecastState = () => {
  const context = React.useContext(ForecastStateContext)
  if (context === undefined) {
    throw new Error("not forecast provider")
  }
  return context
}

const useForecastDispatch = () => {
  const context = React.useContext(ForecastDispatchContext)
  if (context === undefined) {
    throw new Error("not forecast provider")
  }
  return context
}

const forecastReducer = (prev, action) => {
  switch (action.type) {
    case UPDATE_FORECAST: {
      return {
        ...prev,
        ...action.payload,
        error: undefined,
      }
    }
    case NOT_FOUND: {
      return {
        ...initialState,
        name: action.payload,
        error: "not found",
      }
    }
    default:
      throw new Error("action type not defined")
  }
}

const ForecastProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(forecastReducer, initialState)

  return (
    <ForecastStateContext.Provider value={state}>
      <ForecastDispatchContext.Provider value={dispatch}>
        {children}
      </ForecastDispatchContext.Provider>
    </ForecastStateContext.Provider>
  )
}

ForecastProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

async function fetchForecastByCity(
  dispatchForecast,
  dispatchSearchedCities,
  city = ""
) {
  try {
    dispatchSearchedCities({
      type: UPDATE_SEARCHED_CITIES,
      payload: city,
    })
    const { cod, main, name, coord } = await (
      await fetch(
        `${process.env.REACT_APP_OPEN_WEATHER_MAP}?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`
      )
    ).json()
    if (cod === 200) {
      dispatchForecast({
        type: UPDATE_FORECAST,
        payload: {
          main,
          name,
          coord,
        },
      })
    } else {
      dispatchForecast({
        type: NOT_FOUND,
        payload: city,
      })
    }
  } catch (e) {
    console.error("fetch erro", e.message)
  }
}

export {
  ForecastProvider,
  useForecastDispatch,
  useForecastState,
  fetchForecastByCity,
}
