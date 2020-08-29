import React from "react"
import PropTypes from "prop-types"

const Item = ({ handleClickSearch, name, handleClickRemove }) => {
  return (
    <li>
      <div>
        <a href="/" data-name={name} onClick={handleClickSearch}>
          {name}
        </a>
        <button type="button" data-name={name} onClick={handleClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

Item.propTypes = {
  handleClickSearch: PropTypes.func.isRequired,
  handleClickRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Item
