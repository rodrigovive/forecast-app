import React from "react"
import PropTypes from "prop-types"

const FormSearch = ({ disabledSubmit, handleSubmit, valueSearch }) => {
  const [input, setInput] = React.useState(valueSearch)
  React.useEffect(() => {
    setInput(valueSearch)
  }, [valueSearch])

  const handleChangeInputSearch = (e) => {
    setInput(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    handleSubmit(input)
  }
  return (
    <>
      <form data-testid="form" onSubmit={handleSubmitForm}>
        <div className="flex w-full">
          <label htmlFor="search" className="w-full text-lg">
            <span className="w-full font-semibold">City name:</span>
            <div className="flex w-full mt-2">
              <input
                aria-label="search"
                className="w-full text-lg form-input"
                value={input}
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

FormSearch.defaultProps = {
  disabledSubmit: false,
  valueSearch: "",
}

FormSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valueSearch: PropTypes.string,
  disabledSubmit: PropTypes.bool,
}

export default FormSearch
