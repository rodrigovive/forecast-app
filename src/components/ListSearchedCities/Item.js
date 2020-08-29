import React from "react"
import PropTypes from "prop-types"

const Item = ({ handleClickSearch, name, handleClickRemove }) => {
  return (
    <li>
      <div className="flex items-center justify-between my-1">
        <a
          className="text-xl text-gray-700 focus:bg-gray-50"
          href="/"
          data-name={name}
          onClick={handleClickSearch}
        >
          {name}
        </a>
        <button
          type="button"
          className="px-4 py-2 text-white bg-red-400 rounded-md"
          data-name={name}
          onClick={handleClickRemove}
        >
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
