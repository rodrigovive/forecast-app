import React from "react"
import { render } from "@testing-library/react"
import Detail from "./Detail"

test("should be shown detail forecast", () => {
  const cityName = "Tacna"
  const { getByText } = render(
    <Detail
      temperature={12}
      pressure={1}
      humidity={5}
      maxTemperature={5}
      minTemperature={1}
      name={cityName}
    />
  )
  expect(getByText(cityName)).toBeInTheDocument()
})
