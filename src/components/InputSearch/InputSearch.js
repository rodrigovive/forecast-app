import React from "react"
import PropTypes from "prop-types"

const InputSearch = ({ handleSubmitSearch }) => {
  const [input, setInput] = React.useState("")
  const handleChangeInputSearch = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleSubmitSearch) {
      handleSubmitSearch({ input: input.trim() })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          City name:
          <input
            value={input}
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
  handleSubmitSearch: PropTypes.func.isRequired,
}

export default InputSearch
