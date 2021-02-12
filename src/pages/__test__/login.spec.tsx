import { render, waitFor } from "../../test-utils"
import React from "react"
import { ApolloProvider } from "@apollo/client"
import { RenderResult } from "@testing-library/react"
import { createMockClient, MockApolloClient } from "mock-apollo-client"
import { Login } from "../login"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import "jest-dom/extend-expect"

describe("<Login />", () => {
  let mockedClient: MockApolloClient
  let renderResult: RenderResult
  beforeEach(async () => {
    await waitFor(() => {
      mockedClient = createMockClient()
      renderResult = render(
        <HelmetProvider>
          <Router>
            <ApolloProvider client={mockedClient}>
              <Login />
            </ApolloProvider>
          </Router>
        </HelmetProvider>
      )
    })
  })
  it("should render OK", async () => {
    await waitFor(() => {
      expect(document.title).toBe("Log In | Nuber-podcasts")
    })
  })
  it("displays email validation errors", async () => {
    const { getByPlaceholderText, debug, getByRole } = renderResult
    const email = getByPlaceholderText(/email/i)
    await waitFor(() => {
      userEvent.type(email, "test@trash")
    })
    let errorMessage = getByRole("alert")
    expect(errorMessage).toHaveTextContent(/Email is required!/i)
  })
})
