import { useState } from "react"
import SideNav from "./Components/SideNav"
import TopNav from "./Components/TopNav"
import Playlist from "./Components/Playlist"
import Home from "./Pages/Home"

const App = () => {
  const [navOpened, setNavOpened] = useState<boolean>(false)
  const toggleNav = () => {
    setNavOpened(!navOpened)
  }
  return (
   <div className="grid bg-black grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[auto_1fr_350px]">
    <SideNav toggleNav={toggleNav} navOpened={navOpened}/>
    <Home toggleNav={toggleNav} navOpened={navOpened}/>
    <Playlist />
   </div>
  )
}

export default App