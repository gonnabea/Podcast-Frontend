import { gql, useMutation, useQuery } from "@apollo/client"
import { useRef, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import { useMe } from "../hooks/useMe"
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
          id
          title
          createdAt
          category
        }
      }
    }
  }
`

const EDIT_PODCAST_MUTATION = gql`
  mutation UpdatePodcastMutation($updatePodcastInput: UpdatePodcastInput!) {
    updatePodcast(input: $updatePodcastInput) {
      ok
      error
    }
  }
`

const DELETE_PODCAST_MUTATION = gql`
  mutation DeletePodcastMutation($podcastSearchInput: PodcastSearchInput!) {
    deletePodcast(input: $podcastSearchInput) {
      ok
      error
    }
  }
`

const Podcast = ({ match }: any) => {
  const handleLike = async () => {
    const currentLikes = data?.getPodcast?.podcast?.rating

    const updatePodcastInput = {
      id: parseInt(match.params.id),
      payload: {
        rating: currentLikes ? currentLikes + 1 : 1,
      },
    }

    await updatePodcast({ variables: { updatePodcastInput } })

    location.reload()
  }

  const podcastSearchInput = {
    id: parseInt(match.params.id),
  }
  const { data: loggedInUser } = useMe() // 현재 로그인 된 유저 쿼리
  const { data } = useQuery<PodcastQuery>(GET_PODCAST_DETAIL, {
    variables: {
      podcastSearchInput,
    },
  }) // 특정 팟캐스트 쿼리

  const [updatePodcast, { data: updatePodcastOutput }] = useMutation(EDIT_PODCAST_MUTATION) // 팟캐스트 업데이트 뮤테이션
  const [deletePodcast] = useMutation(DELETE_PODCAST_MUTATION)

  // 모달 토글 로직
  const handleEditModal = (editModal: boolean) => {
    console.log("asdsdds")

    if (editModal === true) {
      modalArea.current.style.display = "none"
      setEditModal(false)
    } else {
      modalArea.current.style.display = "block"
      setEditModal(true)
    }
  }

  const handleEditSubmit = async (e: any) => {
    e.preventDefault()

    const title = e.target.children[0].value
    const category = e.target.children[1].value
    const updatePodcastInput = {
      id: parseInt(match.params.id),
      payload: {
        title: title ? title : data?.getPodcast?.podcast?.title, // 입력 값이 없을 시 원래의 값 변경 x 위함.
        category: category ? category : data?.getPodcast?.podcast?.title,
      },
    }
    console.log(updatePodcastInput)
    await updatePodcast({ variables: { updatePodcastInput } })

    location.reload()
  }

  const handleDelete = async () => {
    const podcastSearchInput = {
      id: parseInt(match.params.id),
    }
    await deletePodcast({ variables: { podcastSearchInput } })

    window.location.href = "/"
  }

  const [editModal, setEditModal] = useState(false)
  const modalArea = useRef<any>()

  return (
    <main>
      {console.log(data)}
      <header>
        <h1 className="font-bold w-full flex justify-center text-5xl font-serif">
          {data?.getPodcast?.podcast?.title}
        </h1>
        <span className="font-light w-full flex justify-center">
          {data?.getPodcast?.podcast?.category}
        </span>

        <div className="flex flex-col w-full justify-around items-center border-dashed border-4 border-green-500 p-10 bg-blue-100">
          <span className="font-light">UPLOADER: {data?.getPodcast?.podcast?.creator.email}</span>
          <span className="font-light">{data?.getPodcast?.podcast?.createdAt.slice(0, 10)}</span>
          <span className="text-green-400 font-bold">{data?.getPodcast?.podcast?.rating} Like</span>
          <button onClick={handleLike}>💗 I Like It!</button>

          {/* 팟캐스트 수정 토글 버튼 */}
          {loggedInUser?.me.podcasts.map((podcast: { id: any }) => {
            if (podcast.id == match.params.id) {
              return (
                <button
                  onClick={() => {
                    handleEditModal(editModal)
                  }}
                  className="font-bold text-black border-2 border-green-400 bg-white p-2 mb-2 hover:bg-green-400 hover:text-white "
                >
                  Edit Podcast
                </button>
              )
            }
          })}

          <form ref={modalArea} onSubmit={handleEditSubmit} className="hidden">
            <input type="text" placeholder="Edit Title" />
            <input type="text" placeholder="Edit Category" />
            <input className="mb-10" type="submit" value="EDIT" />
            <button className="flex justify-center w-full" onClick={handleDelete}>
              🗑 Delete
            </button>
          </form>
        </div>
      </header>
      <section>
        {data?.getPodcast?.podcast?.episodes?.map((episode: any) => {
          return (
            <Link
              to={`/podcasts/${+match.params.id}/${episode?.id}`}
              className="w-1/4 h-full flex flex-col justify-around items-center border-double border-4 border-blue-500 hover:bg-blue-200 cursor-pointer"
            >
              <span>{episode.title}</span>
              <span>{episode.category}</span>
              <span>{episode.createdAt.slice(0, 10)}</span>
            </Link>
          )
        })}
      </section>
      <footer></footer>
    </main>
  )
}

export default withRouter(Podcast)
