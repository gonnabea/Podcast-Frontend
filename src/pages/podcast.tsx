import { gql, useMutation, useQuery } from "@apollo/client"
import { PodcastSearchInput } from "../__type_graphql__/globalTypes"

const GET_PODCAST_DETAIL = gql`
  query PodcastQuery($podcastSearchInput: PodcastSearchInput!) {
    getPodcast(input: $podcastSearchInput) {
      ok
      error
      podcast {
        title
        category
        rating
        creator {
          id
        }
        episodes {
          title
          category
        }
      }
    }
  }
`

export const Podcast = () => {
  const podcastSearchInput = {
    id: 1,
  }
  const { data } = useQuery<PodcastSearchInput>(GET_PODCAST_DETAIL, {
    variables: {
      podcastSearchInput,
    },
  })

  return (
    <main>
      {console.log(data)}
      podcastDetail
    </main>
  )
}
