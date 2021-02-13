import { render, waitFor } from "../../../test-utils"
import React from "react"
import { ApolloProvider } from "@apollo/client"
import { RenderResult } from "@testing-library/react"
import { createMockClient, MockApolloClient } from "mock-apollo-client"
import { Podcasts } from "../main"

describe("<Podcasts />", () => {
  let mockedClient: MockApolloClient
  let renderResult: RenderResult
  beforeEach(async () => {
    await waitFor(() => {
      mockedClient = createMockClient()
      renderResult = render(
        <ApolloProvider client={mockedClient}>
          <Podcasts />
        </ApolloProvider>
      )
    })
  })
  it("renders OK", async () => {})
})
