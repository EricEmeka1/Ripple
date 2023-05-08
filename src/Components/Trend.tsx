import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { trend } from '../Data/Trend'
import { useEffect, useState } from 'react'
const Trend = () => {
  interface TrendInterface{
    artist: string
    title: string
    album: string
    like: boolean
    plays: string
    duration: string
    img: string
  }
  
  const [trending, setTrending] = useState<TrendInterface[]>([])

  const like = (number: number) => {
    const newTrends = trend.map((item, index) => {
        if(number === index) {
          item.like = !item.like
        }
        return item
    })
    setTrending(newTrends)
  } 

  useEffect(() => {
    setTrending(trend)
  }, [])

    return (
    <div className="flex flex-col gap-5">
      <p className="text font-bold lg:hidden text-lg">Trending Right Now</p>
      <div className="flex flex-col gap-5">
        {trending?.map((song, index) => (
          <div className="flex cursor-pointer group hover:p-2 capitalize duration-500 hover:shadow hover:shadow-blue-950 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-16 w-16 rounded-md bg-red-500 overflow-hidden">
                <img src={song.img} className='saturate-150 h-full w-full object-cover' alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sx font-semibold">{song.title} </p>
                <p className="text-sm opacity-80 group-hover:text-white duration-500 group-hover:opacity-100">{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-10 text-sm">
              <p className='hidden sm:block opacity-80 group-hover:text-white duration-500 group-hover:opacity-100'>{song.album}</p>
              <p className='hidden sm:block opacity-80 group-hover:text-white duration-500 group-hover:opacity-100'>{song.plays}</p>
              <p className='hidden sm:block opacity-80 group-hover:text-white duration-500 group-hover:opacity-100'>{song.duration}</p>
              {song.like 
                ?  <BsHeartFill className='cursor-pointer active:scale-90 hover:text-red-500 text-red-500 duration-500' onClick={() => like(index)}/>
                : <BsHeart className='cursor-pointer active:scale-90 hover:text-red-500 duration-500' onClick={() => like(index)}/>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trend