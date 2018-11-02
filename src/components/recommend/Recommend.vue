<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in recommentList" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import slider from 'base/slider/Slider'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      recommentList: []
    }
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommentList = res.data.slider
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    slider
  },
  created() {
    this._getRecommend()
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/variable'

  .recommend
    position fixed
    width 100%
    top 80px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-16
          color $color-qq-theme

</style>
