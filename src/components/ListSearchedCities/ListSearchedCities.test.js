import React from "react"
import { render } from "@testing-library/react"
import ListSearchCities from "./ListSearchCities"
import { SearchedCitiesProvider } from "../../context/searchedCities"

test("should be shown list", () => {
  const list = ["Tacna", "Peru", "test"]
  const handleClick = jest.fn()
  const { queryByText } = render(
    <SearchedCitiesProvider initial={list}>
      <ListSearchCities handleClick={handleClick} />
    </SearchedCitiesProvider>
  )
  expect(queryByText("Peru")).toBeInTheDocument()
  expect(queryByText("Tacna")).toBeInTheDocument()
  expect(queryByText("test")).toBeInTheDocument()
})
