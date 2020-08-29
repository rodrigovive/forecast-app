import React from "react"
import PropTypes from "prop-types"
import { useCitiesState } from "../../context/searchedCities"

const Item = ({ handleClick, name }) => {
  return (
    <li>
      <div>
        <a href="/" data-name={name} onClick={handleClick}>
          {name}
        </a>
      </div>
    </li>
  )
}

Item.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

const ListSearchCities = ({ handleClick }) => {
  const stateSearchCities = useCitiesState()

  return (
    <ul>
      {stateSearchCities.map((name) => (
        <Item key={name} name={name} handleClick={handleClick} />
      ))}
    </ul>
  )
}

ListSearchCities.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default ListSearchCities
