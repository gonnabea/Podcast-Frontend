import { Link } from "react-router-dom"
import { isLoggedInVar } from "../apollo"
import { LS_TOKEN } from "../constants"
import { useMe } from "../hooks/useMe"

const handleLogout = () => {
  window.localStorage.removeItem("nuber-potcasts-token")
  isLoggedInVar(false)
}

export const Header: React.FC = () => {
  const { data } = useMe()
  return (
    <header className="py-4">
      <div className="w-full px-5 xl:px-0 mx-auto max-w-screen-xl flex justify-between">
        <h1 className="text-blue-400 text-xl font-bold p-1">
          <Link to="/">JCast 🎧🎶🎼</Link>
        </h1>
        <div className="lg:block w-1/2">
          <input
            className="w-4/5 focus:outline-none border-2 border-blue-400 p-1 rounded-md"
            placeholder="Search Podcasts..."
          />
        </div>
        {console.log(data?.me)}
        {data?.me.role === "Host" ? (
          <div className="flex p-1 border-2 border-blue-400 hover:bg-blue-400">
            <Link to="/create-podcast">New Podcast 🎶</Link>
          </div>
        ) : null}
        <span>
          <Link className="hover:underline flex p-1" to="/user-profile">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {data?.me.email}
          </Link>
        </span>
        {data ? (
          <a href="/" className="cursor-pointer hover:underline flex p-1" onClick={handleLogout}>
            Log Out 🌚
          </a>
        ) : null}
      </div>
    </header>
  )
}
