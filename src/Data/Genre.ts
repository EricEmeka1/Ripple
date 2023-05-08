import Img1 from '../Assets/bg7-d8196d72.jpeg'
import Img2 from '../Assets/bg3-fad0c61b.jpg'
import Img3 from '../Assets/bg6-e8520e0c.jpeg'
import Img4 from '../Assets/bg5-eaae6813.jpg'
import Img5 from '../Assets/bg4-0201f883.jpeg'
import Img6 from '../Assets/bg2-3625e295.jpeg'

interface Genre{
    genre: string
    number: number
    img: string
}

export const genre : Genre[] = [
    {
        genre: 'R&B',
        number: 124,
        img: Img1,
    },
    {
        genre: 'Afrobeats',
        number: 101,
        img: Img3,
    },
    {
        genre: 'Hip-Hop',
        number: 84,
        img: Img2,
    },
    {
        genre: 'Rap',
        number: 77,
        img: Img4,
    },
    {
        genre: 'Indie',
        number: 201,
        img: Img5,
    },
    {
        genre: 'Country',
        number: 49,
        img: Img6,
    },
]