import Taylor from '../Assets/taylor-d30ead2a.jpg'
import Ed from '../Assets/ed-ccb5b735.jpg'
import Drake from '../Assets/drake-3dcdb76d.jpg'
import Burna from '../Assets/burna-1a608e55.jpg'
import Bieber from '../Assets/bieber-4446d4c2.jpg'
import Adele from '../Assets/adele-123c0343.jpg'
import French from '../Assets/french-f7057182.jpg'
import Cara from '../Assets/cara-f1798d7d.jpg'


interface Album{
    artist: string
    title: string
    img: string
}

export const album : Album[] = [
    {
        artist: 'taylor swift',
        title: 'evermore',
        img: Taylor
    },
    {
        artist: 'ed sheeran',
        title: 'divide',
        img: Ed
    },
    {
        artist: 'certified lover boy',
        title: '2U',
        img: Drake
    },
    {
        artist: 'burna boy',
        title: 'love damini',
        img: Burna
    },
    {
        artist: 'justib bieber',
        title: 'justice',
        img: Bieber
    },
    {
        artist: 'adele',
        title: '30',
        img: Adele
    },
    {
        artist: 'french montana',
        title: 'jungle rule',
        img: French
    },
    {
        artist: 'allesia cara',
        title: 'in the mud',
        img: Cara
    },
]