import { BsBell, BsChevronDown, BsSearch, BsMusicNote} from 'react-icons/bs'
import { FaBars, FaTimes} from 'react-icons/fa'
import Profile from '../Assets/ceo3.png'

interface Props{
    toggleNav: () => void
    navOpened: boolean
}

const TopNav = ({toggleNav, navOpened}: Props) => {
  return (
    <div className="z-50 fixed xl:relative">
        <div className={`flex  xl:grid xl:grid-cols-[1fr_auto_auto] border-b-2  xl:border-none ${navOpened ? 'bg-slate-950 xl:bg-black border-slate-950' : 'bg-black shadow-md shadow-slate-950 border-blue-500'} duration-500 z-50 items-center xl:h-fit xl:pt-5 gap-5 xl:px-0 px-3 xl:relative justify-between xl:top-auto xl:left-auto xl:w-auto fixed top-0 left-0 w-screen h-16 `}>
            <div className="xl:hidden flex items-center gap-3">
                <div className="h-7 w-7 bg-blue-500 flex items-center justify-center rounded-full"><BsMusicNote /></div>
                <p className='text-lg font-bold cursor-pointer'>Ripple</p>
            </div>
            <div className="hidden xl:block h-13 rounded-full relative overflow-hidden border-2 border-white">
                <input type="text" className='h-full w-full bg-transparent outline-none border-none text-sm pl-12 ' placeholder='Search Music, Artist, Lyrics.....'/>
                <BsSearch className='absolute top-1/2 -translate-y-1/2 left-5 '/>
            </div>
            <div className="cursor-pointer hidden xl:block relative">
                <BsBell className='text-xl'/>
                <div className="h-3 w-3 absolute -top-1 -right-0 bg-red-500 rounded-full"></div>
            </div>
            <div className="cursor-pointer active:scale-90 duration-500 group hidden xl:flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-500 overflow-hidden border-2 border-blue-500">
                    <img src={Profile} className='w-full h-full object-cover' alt="" />
                </div>
                <div className="flex items-center gap-1">
                    <p className='text-sx group-hover:text-blue-500 duration-500 font-bold'>Jadon</p>
                </div>
            </div>
            {navOpened 
                ? <FaTimes className='text-xl xl:hidden cursor-pointer active:scale-75 duration-500 text-white' onClick={toggleNav}/>
                : <FaBars className='text-xl xl:hidden cursor-pointer active:scale-75 duration-500 text-white' onClick={toggleNav}/>
             }
        </div>
    </div>
  )
}

export default TopNav