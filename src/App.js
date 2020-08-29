import React from "react"
import { ForecastProvider } from "./context/forecast"
import { SearchedCitiesProvider } from "./context/searchedCities"
import Main from "./pages/Main"
import "./assets/main.css"

const App = () => {
  return (
    <ForecastProvider>
      <SearchedCitiesProvider>
        <Main />
      </SearchedCitiesProvider>
    </ForecastProvider>
  )
}

export default App
