import Kendrick from '../Assets/kendrick-17b67bf9.jpg'
import Wizkid from '../Assets/wizkid-3f99de11.jpg'
import Weeknd from '../Assets/week-0b6ffa32.jpg'
import Tems from '../Assets/tems-887bfff7.jpeg'
import Future from '../Assets/future-916ba5b4.jpg'
import Davido from '../Assets/davido-c5e9b2fc.jpg'
import Jay from '../Assets/jayz-828b73be.jpeg'
import Durk from '../Assets/durk-f90d31a0.jpg'
import Drake from '../Assets/drake-3dcdb76d.jpg'
import Ed from '../Assets/ed-ccb5b735.jpg'


interface Playlist{
    artist: string
    title: string
    img: string
}

export const playlist : Playlist[] = [
    {
        artist: 'kendrick lamar',
        title: 'love',
        img: Kendrick
    },
    {
        artist: 'wizkid',
        title: 'essence',
        img: Wizkid
    },
    {
        artist: 'the weeknd',
        title: 'blinding lights',
        img: Weeknd
    },
    {
        artist: 'tems',
        title: 'damages',
        img: Tems
    },
    {
        artist: 'mask off',
        title: 'future',
        img: Future
    },
    {
        artist: 'davido',
        title: 'na money',
        img: Davido
    },
    {
        artist: 'jay-Z',
        title: 'forever young',
        img: Jay
    },
    {
        artist: 'lil durk',
        title: 'all love',
        img: Durk
    },
    {
        artist: 'ed sheeran',
        title: 'bad habits',
        img: Ed
    },
    {
        artist: 'drake',
        title: 'headlines',
        img: Drake
    }
]