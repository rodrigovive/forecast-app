import React from "react"
import PropTypes from "prop-types"

const UPDATE_SEARCHED_CITIES = "UPDATE_SEARCHED_CITIES"

const LOCAL_STORAGE_SEARCHED_CITIES = "LOCAL_STORAGE_SEARCHED_CITIES"

const initialState = []

const SearchedCitiesState = React.createContext(initialState)

const SearchedCitiesDispatch = React.createContext()

const savedLocalSearched = (data) => {
  localStorage.setItem(LOCAL_STORAGE_SEARCHED_CITIES, JSON.stringify(data))
}

const getLocalSearched = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCHED_CITIES)) || []
}

const useCitiesState = () => {
  const context = React.useContext(SearchedCitiesState)
  if (context === undefined) {
    throw new Error("not context searched cities")
  }
  return context
}

const useCitiesDispatch = () => {
  const context = React.useContext(SearchedCitiesDispatch)
  if (context === undefined) {
    throw new Error("not context searched cities")
  }
  return context
}

const filterSearched = (data = [], max = 5) => {
  const indexValue = data.length > max ? data.length - max : 0
  return data.slice(indexValue)
}

const searchedCitiesReducer = (prev, action) => {
  switch (action.type) {
    case UPDATE_SEARCHED_CITIES: {
      const updatedSearched = filterSearched([
        ...new Set([...prev, action.payload]),
      ])
      savedLocalSearched(updatedSearched)
      console.log("updatedSearched", updatedSearched)
      return updatedSearched
    }
    default:
      throw new Error("not defined type")
  }
}

const SearchedCitiesProvider = ({ children, initial = getLocalSearched() }) => {
  const [state, dispatch] = React.useReducer(searchedCitiesReducer, initial)
  return (
    <SearchedCitiesState.Provider value={state}>
      <SearchedCitiesDispatch.Provider value={dispatch}>
        {children}
      </SearchedCitiesDispatch.Provider>
    </SearchedCitiesState.Provider>
  )
}

SearchedCitiesProvider.propTypes = {
  children: PropTypes.element.isRequired,
  initial: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
}

SearchedCitiesProvider.defaultProps = {
  initial: getLocalSearched(),
}

export {
  UPDATE_SEARCHED_CITIES,
  useCitiesDispatch,
  useCitiesState,
  SearchedCitiesProvider,
}
