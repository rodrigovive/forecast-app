import React from "react"
import { render, fireEvent } from "@testing-library/react"
import FormSearch from "./FormSearch"

test("input search should be updated", () => {
  const handleSubmit = jest.fn()
  const handleChangeInputSearch = jest.fn()
  const valueSearch = "Tacna"
  const { getByLabelText } = render(
    <FormSearch
      handleSubmit={handleSubmit}
      handleChangeInputSearch={handleChangeInputSearch}
      valueSearch={valueSearch}
    />
  )
  const input = getByLabelText("search")
  expect(input.value).toBe("Tacna")
  fireEvent.change(input, { target: { value: "Peru" } })
  expect(input.value).toBe("Peru")
})

test("submit should be called", () => {
  const handleSubmit = jest.fn()
  const handleChangeInputSearch = jest.fn()
  const valueSearch = "Tacna"
  const { queryByTestId } = render(
    <FormSearch
      handleSubmit={handleSubmit}
      handleChangeInputSearch={handleChangeInputSearch}
      valueSearch={valueSearch}
    />
  )
  const form = queryByTestId("form")
  fireEvent.submit(form)
  expect(handleSubmit).toHaveBeenCalled()
})
