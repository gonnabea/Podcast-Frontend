import { gql, useMutation, useQuery } from "@apollo/client"
import { withRouter } from "react-router-dom"
import { PodcastSearchInput } from "../__type_graphql__/globalTypes"
import { PodcastQuery } from "../__type_graphql__/PodcastQuery"

const GET_PODCAST_DETAIL = gql`
  query PodcastQuery($podcastSearchInput: PodcastSearchInput!) {
    getPodcast(input: $podcastSearchInput) {
      ok
      error
      podcast {
        title
        category
        rating
        createdAt
        creator {
          id
          email
        }
        episodes {
          title
          createdAt
          category
        }
      }
    }
  }
`

const Podcast = ({ match }: any) => {
  const podcastSearchInput = {
    id: parseInt(match.params.id),
  }
  const { data } = useQuery<PodcastQuery>(GET_PODCAST_DETAIL, {
    variables: {
      podcastSearchInput,
    },
  })

  return (
    <main>
      {console.log(data)}
      <header>
        <h1 className="font-bold w-full flex justify-center text-3xl font-serif">
          {data?.getPodcast?.podcast?.title}
        </h1>
        <div className="flex flex-col w-full justify-center items-center border-dashed border-4 border-green-500 p-10 bg-blue-100">
          <span className="font-light">UPLOADER: {data?.getPodcast?.podcast?.creator.email}</span>
          <span className="font-light">{data?.getPodcast?.podcast?.createdAt.slice(0, 10)}</span>
          <span className="text-green-400 font-bold">{data?.getPodcast?.podcast?.rating}</span>
        </div>
      </header>
      <section>
        {data?.getPodcast?.podcast?.episodes?.map((episode: any) => {
          return (
            <div className=" w-1/4 flex flex-col justify-center items-center border-double border-4 border-blue-500 hover:bg-blue-200 cursor-pointer">
              <span>{episode.title}</span>
              <span>{episode.category}</span>
              <span>{episode.createdAt.slice(0, 10)}</span>
            </div>
          )
        })}
      </section>
      <footer></footer>
    </main>
  )
}

export default withRouter(Podcast)
