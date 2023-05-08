import { genre } from "../Data/Genre"

const Genre = () => {
  return (
    <div className="flex flex-col overflow-x-auto w-full gap-5">
        <p className="text font-bold text-lg">Recently Listened Genres</p>
        <div className="grid hidescrollbar overflow-x-auto hover:pt-2 duration-500 grid-flow-col auto-cols-[260px] gap-5">
            {genre.map((songs, index) => (
                <div className={`h-48 ${index === 0 ? 'origin-bottom-left' : 'origin-bottom' } cursor-pointer hover:scale-105 duration-500 relative skroll overflow-hidden rounded-xl flex items-end`}>
                    <div className="z-30 h-[4.5rem] w-full glass rounded-l-xl rounded-t-none rounded-r-xl px-5 py-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm lg:text-sx font-bold">{songs.genre}</p>
                            <p className="text-xs opacity-90 font-semibold">{songs.number} New Songs</p>
                        </div>
                    </div>
                    <img src={songs.img} className="z-10 h-full w-full absolute top-0 left-0 saturate-150" alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Genre