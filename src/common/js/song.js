export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export const createSong = (musicData) => {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: musicData.singer,
    name: filterSinger(musicData.singer),
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://stream17.qqmusic.qq.com/${musicData.songid}3e7.mp3`
  })
}

const filterSinger = (singer) => {
  let ret = []
  if (!singer) return ''
  singer.forEach(ele => {
    ret.push(ele.name)
  })
  return ret.join('/')
}
