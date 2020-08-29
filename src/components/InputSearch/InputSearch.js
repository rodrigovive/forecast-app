import React from "react"
import PropTypes from "prop-types"

const InputSearch = ({
  handleSubmit,
  valueSearch,
  handleChangeInputSearch,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          City name:
          <input
            value={valueSearch}
            onChange={handleChangeInputSearch}
            type="text"
            id="search"
            name="search"
            placeholder="Search by the city name"
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </>
  )
}

InputSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInputSearch: PropTypes.func.isRequired,
  valueSearch: PropTypes.string.isRequired,
}

export default InputSearch
