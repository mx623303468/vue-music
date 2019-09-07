<template>
  <transition name="singer-detail-slide">
    <div class="singer-detail" :class="{isShow: !singer.id}">singer-detail</div>
  </transition>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { createSong } from 'common/js/song'
import { ERR_OK } from 'api/config'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters(['singer'])
  },
  created() {
    this._getSingerDetail()
  },
  methods: {
    _getSingerDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id)
        .then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log('this.songs', this.songs)
            // processSongsUrl(this._normalizeSongs(res.data.list)).then(songs => {
            //   console.log(songs)
            //   this.songs = songs
            // })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        // console.log('musicData', musicData)

        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
    // _normalizeSongs(list) {
    //   let ret = []
    //   list.forEach(item => {
    //     let { musicData } = item
    //     if (isValidMusic(musicData)) {
    //       ret.push(createSong(musicData))
    //     }
    //   })
    //   return ret
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/variable';

.singer-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background-f4f4f4 = #f4f4f4;
}

.isShow {
  opacity: 0;
}

.singer-detail-slide-enter-active, .singer-detail-slide-leave-active {
  transition: all 0.3s linear;
}

.singer-detail-slide-enter, .singer-detail-slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
