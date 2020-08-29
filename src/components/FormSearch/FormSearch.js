import React from "react"
import PropTypes from "prop-types"

const FormSearch = ({
  disabledSubmit,
  handleSubmit,
  valueSearch,
  handleChangeInputSearch,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full">
          <label htmlFor="search" className="w-full text-lg">
            <span className="w-full font-semibold">City name:</span>
            <div className="flex w-full mt-2">
              <input
                className="w-full text-lg form-input"
                value={valueSearch}
                onChange={handleChangeInputSearch}
                type="text"
                id="search"
                name="search"
                placeholder="Search by the city name"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-400 rounded-md"
                disabled={disabledSubmit}
              >
                Search
              </button>
            </div>
          </label>
        </div>
      </form>
    </>
  )
}

FormSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInputSearch: PropTypes.func.isRequired,
  valueSearch: PropTypes.string.isRequired,
  disabledSubmit: PropTypes.bool.isRequired,
}

export default FormSearch
