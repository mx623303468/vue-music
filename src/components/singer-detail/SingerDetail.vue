<template>
  <transition name="singer-detail-slide">
    <div class="singer-detail">singer-detail</div>
  </transition>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
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
        this.$router.push({ path: '/singer' })
        return
      }
      getSingerDetail(this.singer.id)
        .then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
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
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
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

.singer-detail-slide-enter-active, .singer-detail-slide-leave-active {
  transition: all 0.3s linear;
}

.singer-detail-slide-enter, .singer-detail-slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>

// http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003clL2S0lVVSF.m4a?guid=6972597432&vkey=AB33B7EFB3CC0C0E8844CFB682E45504E4DFADC3C82662702452EC99D219BE355E302ADA5BB77323811CD21DB48015B682538FA4E1723483&uin=0&fromtag=38
