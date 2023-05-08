import TopNav from '../Components/TopNav'
import Genre from '../Components/Genre'
import Trend from '../Components/Trend'
import Album from '../Components/Album'

interface Props{
  toggleNav : () => void
  navOpened: boolean
}

const Home = ({toggleNav, navOpened}: Props) => {
  return (
  <div className=" grid gap-7 p-5 xl:p-7 text-white bg-black lg:h-screen lg:grid-rows-[auto_1fr_auto] pt-20 xl:pt-0 xl:grid-rows-[auto_auto_1fr_auto]">
    <div className="fixed z-50 xl:relative">
      <TopNav toggleNav={toggleNav} navOpened={navOpened}/>
    </div>
    <Genre />
    <div className="h-full grid lg:grid-rows-[auto_1fr] overflow-y-auto">
      <p className="text font-bold hidden lg:block pb-5 text-lg">Trending Right Now</p>
      <div className="overflow-y-auto hidescrollbar">
        <Trend />
      </div>
    </div>
    <Album />
  </div>
  )
}

export default Home 