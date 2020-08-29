import React from "react"
import PropTypes from "prop-types"

const InputSearch = ({
  disabledSubmit,
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

        <button type="submit" disabled={disabledSubmit}>
          Search
        </button>
      </form>
    </>
  )
}

InputSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInputSearch: PropTypes.func.isRequired,
  valueSearch: PropTypes.string.isRequired,
  disabledSubmit: PropTypes.bool.isRequired,
}

export default InputSearch
