import { gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"

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
  //   const { create } = useForm({
  //     reValidateMode: "onChange",
  //     defaultValues: {},
  //     resolver: undefined,
  //     context: undefined,
  //     criteriaMode: "firstError",
  //     shouldFocusError: true,
  //     shouldUnregister: true,
  //   })

  const [addPodcast, { data }] = useMutation(CREATE_PODCAST_MUTATION)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
    const createPodcastInput = {
      title: e.target.children[0].value,
      category: e.target.children[1].value,
    }
    console.log(createPodcastInput)
    addPodcast({
      variables: {
        createPodcastInput: {
          title: e.target.children[0].value,
          category: e.target.children[1].value,
        },
      },
    })
    console.log(data)
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
          <input type="submit" value="Create" />
        </form>
      </section>
    </main>
  )
}
