import React from "react"
import InputSearch from "./components/InputSearch"
import {
  fetchForecastByCity,
  ForecastProvider,
  useForecastDispatch,
  useForecastState,
} from "./context/forecast"
import {
  useCitiesDispatch,
  SearchedCitiesProvider,
  UPDATE_SEARCHED_CITIES,
} from "./context/searchedCities"
import ListSearchCities from "./components/ListSearchedCities"

function App() {
  const dispatchForecast = useForecastDispatch()
  const stateForecast = useForecastState()
  const dispatchSearchedCities = useCitiesDispatch()

  const handleSubmitSearch = async (values) => {
    await fetchForecastByCity(dispatchForecast, values.input)
    dispatchSearchedCities({
      type: UPDATE_SEARCHED_CITIES,
      payload: values.input,
    })
  }

  return (
    <div className="App">
      <main>
        <h1>Forecast App</h1>
        <InputSearch handleSubmitSearch={handleSubmitSearch} />
        <ListSearchCities />

        <pre>
          <code>{JSON.stringify(stateForecast, null, 4)}</code>
        </pre>
      </main>
    </div>
  )
}

const AppWrapper = () => {
  return (
    <ForecastProvider>
      <SearchedCitiesProvider>
        <App />
      </SearchedCitiesProvider>
    </ForecastProvider>
  )
}

export default AppWrapper
