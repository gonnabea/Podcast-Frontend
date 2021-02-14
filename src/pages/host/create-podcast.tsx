import { gql, useMutation } from "@apollo/client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router-dom"

const CREATE_PODCAST_MUTATION = gql`
  mutation CreatePodcastMutation($createPodcastInput: CreatePodcastInput!) {
    createPodcast(input: $createPodcastInput) {
      ok
      error
      id
    }
  }
`

export const CreatePodcast = () => {
  const [addPodcast, { data }] = useMutation(CREATE_PODCAST_MUTATION)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const createPodcastInput = {
      title: e.target.children[0].value,
      category: e.target.children[1].value,
    }

    await addPodcast({
      variables: {
        createPodcastInput,
      },
    })

    window.location.href = "/"
  }

  return (
    <main>
      <h1 className="ml-30 flex justify-center">Create-Podcast</h1>
      <section className="bg-blue-200 h-52 flex flex-col justify-center items-center">
        <form
          className="w-full flex flex-col justify-center items-center"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input className="w-9/12 mb-3 p-3" type="text" placeholder="Podcast Title"></input>
          <input className="w-9/12 mb-3  p-3" type="text" placeholder="Category"></input>
          <input
            className="rounded-3xl w-20 hover:bg-blue-400 cursor-pointer"
            type="submit"
            value="Create"
          />
        </form>
      </section>
    </main>
  )
}
