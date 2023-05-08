import Davido from '../Assets/davido-c5e9b2fc.jpg'
import Billie from '../Assets/billie-ac4685ef.jpg'
import Burna from '../Assets/burna-1a608e55.jpg'
import Durk from '../Assets/durk-f90d31a0.jpg'
import Omah from '../Assets/omah-ea81d97b.jpg'


interface Trend{
    artist: string
    title: string
    album: string
    like: boolean
    plays: string
    duration: string
    img: string
}

export const trend : Trend[] = [
    {
        artist: 'davido',
        title: 'unavailable',
        album: 'timeless',
        like: false,
        plays: '12,050,011',
        duration: '3:05',
        img: Davido,
    },
    {
        artist: 'billie eilish',
        title: 'bad guy',
        album: 'happier than ever',
        like: false,
        plays: '11,740,122',
        duration: '2:46',
        img: Billie,
    },
    {
        artist: 'burna boy',
        title: 'last last',
        album: 'love damini',
        like: false,
        plays: '10,345,008',
        duration: '2:56',
        img: Burna,
    },
    {
        artist: 'lil durk',
        title: 'headtaps',
        album: '7220',
        like: false,
        plays: '10,111,321',
        duration: '2:45',
        img: Durk,
    },
    {
        artist: 'omah lay',
        title: 'woman',
        album: 'boy alone',
        like: false,
        plays: '10,090,881',
        duration: '3:02',
        img: Omah,
    },
    
]