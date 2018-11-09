<template>
  <transition name="singer-slide">
    <div class="singer-detail">
      singer-detail
    </div>
  </transition>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getSingerDetail()
  },
  methods: {
    _getSingerDetail() {
      if (!this.singer.id) {
        this.$router.push({path: '/singer'})
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      }).catch((error) => {
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
@import '~common/styles/variable'

  .singer-detail
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background-f4f4f4 = #f4f4f4

  .singer-slide-enter-active,
  .singer-slide-leave-active
    transition all 0.3s linear

  .singer-slide-enter,
  .singer-slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
