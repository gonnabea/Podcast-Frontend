import { isLoggedInVar } from "../apollo"
import { LS_TOKEN } from "../constants"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Mainpage } from "../pages/listener/main"
import { NotFound } from "../404"
import { Header } from "../components/header"
import { useMe } from "../hooks/useMe"
import { Episodes } from "../pages/listener/episodes"
import { CreatePodcast } from "../pages/host/create-podcast"
import Podcast from "../pages/podcast"

const ListenerRoutes = [
  <Route key={1} path="/" exact>
    <Mainpage />
  </Route>,
  <Route key={2} path="/podcasts/:id/:id">
    <Episodes />
  </Route>,
  <Route key={3} path="/podcasts/:id">
    <Podcast />
  </Route>,
]

const HostRoutes = [
  <Route key={1} path="/" exact>
    <Mainpage />
  </Route>,
  <Route key={2} path="/create-podcast">
    <CreatePodcast />
  </Route>,
  <Route key={3} path="/podcasts/:id">
    <Podcast />
  </Route>,
]

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe()

  const handleLogout = () => {
    localStorage.removeItem(LS_TOKEN)
    isLoggedInVar(false)
  }
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    )
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me.role === "Listener" && ListenerRoutes}
        {data.me.role === "Host" && HostRoutes}

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
