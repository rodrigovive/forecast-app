import React from "react"
import PropTypes from "prop-types"

const ItemForecast = ({ name, value }) => (
  <div className="my-2 grid grid-cols-2 sm:grid-cols-3">
    <p className="text-base">{name}</p>
    <span className="text-base">{value}</span>
  </div>
)

ItemForecast.defaultProps = {
  name: "",
  value: "",
}

ItemForecast.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ItemForecast
