// import { getLyric, getSongsUrl } from 'api/song'
// import { ERR_OK } from '@/api/config'
// import { Base64 } from 'js-base64'

export default class Song {
  constructor({ id, mid, singer, name, album, duration, albumImage, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.albumImage = albumImage
    this.filename = `C400${this.mid}.m4a`
    this.url = url
  }

  // getLyric() {
  //   if (this.lyric) {
  //     return Promise.resolve(this.lyric)
  //   }

  //   return new Promise((resolve, reject) => {
  //     getLyric(this.mid).then(res => {
  //       if (res.retcode === ERR_OK) {
  //         this.lyric = Base64.decode(res.lyric)
  //         resolve(this.lyric)
  //       } else {
  //         // eslint-disable-next-line prefer-promise-reject-errors
  //         reject('no lyric')
  //       }
  //     })
  //   })
  // }
}

export const createSong = musicData => {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    albumImage: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: ''
    // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&guid=5931742855&vkey=${songVkey}`
  })
}

const filterSinger = singer => {
  let ret = []
  if (!singer) return ''
  singer.forEach(ele => {
    ret.push(ele.name)
  })
  return ret.join('/')
}

// export function isValidMusic(musicData) {
//   return (
//     musicData.songid &&
//     musicData.albummid &&
//     (!musicData.pay || musicData.pay.payalbumprice === 0)
//   )
// }

// export function processSongsUrl(songs) {
//   if (!songs.length) {
//     return Promise.resolve(songs)
//   }
//   return getSongsUrl(songs).then(purlMap => {
//     songs = songs.filter(song => {
//       const purl = purlMap[song.mid]
//       if (purl) {
//         song.url =
//           purl.indexOf('http') === -1
//             ? `http://dl.stream.qqmusic.qq.com/${purl}`
//             : purl
//         return true
//       }
//       return false
//     })
//     return songs
//   })
// }
