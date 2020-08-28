import React from "react"
import { useCitiesState } from "../../context/searchedCities"

const ListSearchCities = () => {
  const stateSearchCities = useCitiesState()

  return (
    <ul>
      {stateSearchCities.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

export default ListSearchCities
