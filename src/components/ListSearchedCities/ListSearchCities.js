import React from "react"
import PropTypes from "prop-types"
import {
  useCitiesState,
  useCitiesDispatch,
  DELETE_SEARCHED_CITY,
} from "../../context/searchedCities"
import Item from "./Item"

const ListSearchCities = ({ handleClick }) => {
  const stateSearchCities = useCitiesState()
  const dispatchSearchedCities = useCitiesDispatch()

  const handleClickRemoveCity = (e) => {
    e.preventDefault()
    const {
      currentTarget: {
        dataset: { name },
      },
    } = e
    dispatchSearchedCities({
      type: DELETE_SEARCHED_CITY,
      payload: name,
    })
  }

  return (
    <ul>
      {stateSearchCities.map((name) => (
        <Item
          key={name}
          name={name}
          handleClickSearch={handleClick}
          handleClickRemove={handleClickRemoveCity}
        />
      ))}
    </ul>
  )
}

ListSearchCities.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default ListSearchCities
