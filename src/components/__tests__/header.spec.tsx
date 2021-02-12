import { render, waitFor } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "../header"
import { ME_QUERY } from "../../hooks/useMe"

describe("<Header />", () => {
  it("renders OK", async () => {
    await waitFor(async () => {
      const { debug } = render(
        <MockedProvider
          mocks={[
            {
              request: {
                query: ME_QUERY,
              },
              result: {
                data: {
                  me: {
                    id: 1,
                    email: "",
                    role: "",
                    verified: true,
                  },
                },
              },
            },
          ]}
        >
          <Router>
            <Header />
          </Router>
        </MockedProvider>
      )
      await new Promise((resolve) => setTimeout(resolve, 0))
      debug()
    })
  })
})
