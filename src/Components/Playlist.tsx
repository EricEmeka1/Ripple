import { CgMore } from 'react-icons/cg'
import { playlist } from '../Data/Playlist'

const Playlist = () => {
    return (
    <div className='p-5 xl:p-7 bg-slate-950 lg:h-screen overflow-y-auto flex flex-col xl:pt-7 gap-5 lg:pt-20 text-white'>
        <p className="text font-bold text-lg">Next on Chillout Playlist</p>
        <div className="flex flex-col hidescrollbar overflow-y-auto gap-7">
            {playlist.map((song) => (
                <div className="flex hover:pl-4 duration-500 cursor-pointer justify-between items-center ">
                    <div className="flex items-center gap-2">
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-red-500">
                        <img src={song.img} className='saturate-150 h-full w-full object-cover' alt="" />
                    </div>
                    <div className="flex flex-col capitalize gap-1">
                        <p className="text-sm font-bold">{song.title} </p>
                        <p className="text-sm opacity-80">{song.artist}</p>
                    </div>
                    </div>
                    <CgMore />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Playlist