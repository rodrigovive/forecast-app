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
} from "./context/searchedCities"
import ListSearchCities from "./components/ListSearchedCities"
import Map from "./components/Map"

function App() {
  const dispatchForecast = useForecastDispatch()
  const stateForecast = useForecastState()
  const dispatchSearchedCities = useCitiesDispatch()

  const [input, setInput] = React.useState("")

  const searchForecast = async (value = input) => {
    const sanitizationInput = value.trim()
    await fetchForecastByCity(
      dispatchForecast,
      dispatchSearchedCities,
      sanitizationInput
    )
  }

  const handleSubmitSearch = async (e) => {
    e.preventDefault()
    searchForecast(input)
  }

  const handleChangeInputSearch = (e) => {
    setInput(e.target.value)
  }

  const handleClickSearchedCity = (e) => {
    e.preventDefault()
    const {
      currentTarget: {
        dataset: { name },
      },
    } = e
    setInput(name)
    searchForecast(name)
  }

  return (
    <div className="App">
      <main>
        <h1>Forecast App</h1>
        <InputSearch
          handleSubmit={handleSubmitSearch}
          valueSearch={input}
          handleChangeInputSearch={handleChangeInputSearch}
        />
        <ListSearchCities handleClick={handleClickSearchedCity} />
        <pre>
          <code>{JSON.stringify(stateForecast, null, 4)}</code>
        </pre>
        <Map />
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
