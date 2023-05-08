import { album } from "../Data/Album"

const Album = () => {
  return (
    <div className="flex w-full overflow-x-auto flex-col gap-5">
        <div className="flex justify-between items-center">
            <p className="text font-bold text-lg">Favorite Albums</p>
            <p className="text-blue-500 font-bold text-sm cursor-pointer">View All</p>
        </div>
        <div className="grid hidescrollbar overflow-x-auto grid-flow-col auto-cols-[175px] gap-5">
            {album.map((song) => (
                <div className="flex flex-col group cursor-pointer capitalize gap-2">
                    <div className="h-36 overflow-hidden rounded-xl flex items-end">
                        <img src={song.img} className="h-full w-full group-hover:scale-110 duration-700 object-cover saturate-150" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sx font-semibold pt-2">{song.title}</p>
                        <p className="text-sm opacity-80">{song.artist} </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Album