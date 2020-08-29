import React from "react"
import FormSearch from "../components/FormSearch"
import {
  fetchForecastByCity,
  useForecastDispatch,
  useForecastState,
} from "../context/forecast"
import { useCitiesDispatch } from "../context/searchedCities"
import ListSearchCities from "../components/ListSearchedCities"
import Forecast from "../components/Forecast"

function Main() {
  const dispatchForecast = useForecastDispatch()
  const stateForecast = useForecastState()
  const dispatchSearchedCities = useCitiesDispatch()

  const [valueSearch, setValueSearch] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const searchForecast = async (value = "") => {
    setLoading(true)
    await fetchForecastByCity({
      dispatchForecast,
      dispatchSearchedCities,
      value,
      stateForecast,
    })
    setLoading(false)
  }

  const handleSubmitSearch = (input) => {
    searchForecast(input)
  }

  const handleClickSearchedCity = (e) => {
    e.preventDefault()
    const {
      currentTarget: {
        dataset: { name },
      },
    } = e
    setValueSearch(name)
    searchForecast(name)
  }

  return (
    <main>
      <div className="px-4 mx-auto text-center max-w-screen-xl">
        <h1 className="mt-4 text-3xl font-bold font-extrabold">Forecast App</h1>
      </div>
      <div className="mx-auto mt-4 max-w-screen-md">
        <FormSearch
          disabledSubmit={loading}
          handleSubmit={handleSubmitSearch}
          valueSearch={valueSearch}
        />

        <ListSearchCities handleClick={handleClickSearchedCity} />
        {loading && <p className="font-semibold text-center"> loading ... </p>}
        {stateForecast.current.name && (
          <div className="flex flex-col items-center justify-center mt-4 md:flex-row">
            <Forecast currentForecast={stateForecast.current} />
          </div>
        )}
      </div>
    </main>
  )
}
export default Main
