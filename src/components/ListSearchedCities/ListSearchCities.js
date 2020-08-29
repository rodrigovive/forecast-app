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
    <div className="w-full px-4 mt-4">
      <p className="font-semibold text-md">Searched cities:</p>
      <ul className="mt-2">
        {stateSearchCities.map((name) => (
          <Item
            key={name}
            name={name}
            handleClickSearch={handleClick}
            handleClickRemove={handleClickRemoveCity}
          />
        ))}
      </ul>
    </div>
  )
}

ListSearchCities.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default ListSearchCities
