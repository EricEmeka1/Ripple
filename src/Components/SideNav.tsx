import { useState } from 'react'
import { BsHouse, BsSearch, BsHeart, BsHeadphones, BsActivity, BsMusicNote, BsDownload} from 'react-icons/bs'
import { BiChart, BiPlus, BiLogOut} from 'react-icons/bi'

interface Props{
  navOpened: boolean
  toggleNav: () => void
}

const SideNav = ({navOpened, toggleNav}: Props) => {

    const [active, setActive] = useState<number>(0)

    const changeActive = (num: number) => {
      setActive(num)
      toggleNav()
    }

    const links = [
      {
        icon: <BsHouse />,
        link: 'home'
      },
      {
        icon: <BsSearch />,
        link: 'search'
      },
      {
        icon: <BsHeart />,
        link: 'wishlist'
      },
      {
        icon: <BsHeadphones />,
        link: 'music'
      },
      {
        icon: <BiChart />,
        link: 'chart'
      },
      {
        icon: <BsDownload />,
        link: 'download'
      },
      
      {
        icon: <BsActivity />,
        link: 'activity'
      },
      {
        icon: <BiPlus />,
        link: 'add'
      },
      
    ]
    return (
      <div className="z-50 fixed xl:relative">
        {/* DESKTOP NAV */}
        <div className="w-fit h-screen group p-5 hidden xl:flex pt-5 justify-between flex-col items-center bg-slate-950">
          <div className="flex flex-col gap-10">
              <div className="flex cursor-pointer items-center">
                  <div className="h-14 w-14 bg-blue-500 flex items-center justify-center rounded-full"><BsMusicNote className='text-xl text-white'/></div>
                  <div className="w-0 duration-500 group-hover:w-40 overflow-hidden">
                    <p className='text-lg font-bold text-white cursor-pointer group-hover:pl-5 duration-500'>Ripple</p>
                  </div>
              </div>
              <div className="flex flex-col gap-3">
                {links.map((link, index) => (
                  <div onClick={() => changeActive(index)} className={`flex active:scale-90 group/one duration-500 cursor-pointer h-14 ${active !== index && 'hover:pl-5 '}`}>
                      <div className={`w-14 rounded group-hover/one:text-red-500 duration-500 ${active === index ? 'bg-black text-red-500' : 'text-white bg-transparent'} flex items-center text-lg justify-center `}>{link.icon}</div>
                      <div className={`w-0 group-hover/one:text-red-500 ${active === index ? ' text-red-500 ' : 'text-white bg-transparent'} group-hover:w-40 duration-500 overflow-hidden flex items-center group-hover:pl-3 `}><p className='text-sm capitalize font-bold'>{link.link}</p></div>
                  </div>
                ))}
              </div>
          </div>
          <div className={`flex group/one duration-500 cursor-pointer h-14 `}>
                <div className={`w-14 rounded group-hover/one:text-red-500 duration-500  flex items-center justify-center text-lg text-white`}><BiLogOut /></div>
                <div className="w-0 group-hover/one:text-red-500 group-hover:w-40 text-white duration-500 overflow-hidden flex items-center group-hover:pl-3"><p className='text-sm capitalize font-bold'>Logout</p></div>
          </div>
        </div>
        {/* MOBILE NAV */}
        <div className={`fixed z-50 top-16 flex px-5 pt-2 flex-col xl:hidden justify-between navHeight bg-slate-950 w-screen ${navOpened ? 'left-0': 'left-[150vw]'} duration-500`}>
              <div className="flex flex-col ">
                {links.map((link, index) => (
                  <div onClick={() => changeActive(index)} className={`flex group/one duration-500 cursor-pointer h-14 gap-5`}>
                      <div className={`rounded group-hover/one:text-red-500 duration-500 ${active === index ? ' text-red-500 ' : 'text-white bg-transparent'} flex items-center text-lg justify-center `}>{link.icon}</div>
                      <div className={` group-hover/one:text-red-500 ${active === index ? ' text-red-500 ' : 'text-white'} duration-500 overflow-hidden flex items-center `}><p className='text-sm capitalize font-bold'>{link.link}</p></div>
                  </div>
                ))}
              </div>
              <div onClick={toggleNav} className={`flex group/one duration-500 cursor-pointer h-14 gap-5`}>
                  <div className={`rounded group-hover/one:text-red-500 duration-500  flex items-center justify-center text-lg text-white`}><BiLogOut /></div>
                  <div className="text-white group-hover/one:text-red-500 w-40 duration-500 overflow-hidden flex items-center"><p className='text-sm capitalize font-bold'>Logout</p></div>
              </div>
          </div>
      </div>
  )
}

export default SideNav