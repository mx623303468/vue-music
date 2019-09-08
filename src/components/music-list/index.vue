<template>
  <div class="music-list">
    <div class="top-bar" ref="top-bar">
      <i class="icon-back" @click="back"></i>
      <h1 class="title-name" v-html="title"></h1>
    </div>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter" ref="fliter"></div>
    </div>
    <div class="layer" ref="layer"></div>
    <song-scroll
      :data="songs"
      class="song-scroll"
      ref="songScroll"
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      @scroll="scroll"
    >
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </song-scroll>
  </div>
</template>

<script>
import SongScroll from 'base/scroll/Scroll'
import SongList from 'base/songList'

export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      scrollY: 0
    }
  },
  components: {
    SongScroll,
    SongList
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
  },
  mounted() {
    // topbar 高度
    this.topBarHeight = this.$refs['top-bar'].offsetHeight
    // 上部 背景图的高度
    this.bgImageHeight = this.$refs['bgImage'].clientHeight
    this.$refs['songScroll'].$el.style.top = `${this.bgImageHeight + 2}px`
  },
  methods: {
    back() {
      this.$router.back()
    },
    scroll(pos) {
      this.scrollY = pos.y
    }
  },
  watch: {
    scrollY(newVal) {
      let zIndex = 0
      let scale = 1
      let percent = Math.abs(newVal / this.bgImageHeight) // 滚动距离相对背景图片的值
      // let blur = 0

      // 用背景图的高度减去 topbar 的高度，得出最大可滚动距离，和最新的滚动位置做比较，取最大值。
      let translateY = Math.max(-this.bgImageHeight + this.topBarHeight, newVal)
      this.$refs['layer'].style['transform'] = `translateY(${translateY}px)`

      // 如果滚动距离大于0 ，则证明为向下滚动，就设置背景图片的 scale 随滚动距离变化。
      if (newVal > 0) {
        scale = 1 + percent
        zIndex = 10
      } else {
        // blur = Math.min(20, 20 * percent)
      }
      // this.$refs['filter'].style['fliter'] = `blur(${blur}px)`

      // 如果向上滚动的距离小于 背景图片减去topbar的高度，图片高度就等于topbar的高度，并设置 z-index 保证覆盖滚动列表，否则就设置回原本的样式大小
      if (newVal < -this.bgImageHeight + this.topBarHeight) {
        zIndex = 10
        this.$refs['bgImage'].style['height'] = `${this.topBarHeight}px`
        this.$refs['bgImage'].style['paddingTop'] = 0
      } else {
        this.$refs['bgImage'].style['height'] = 0
        this.$refs['bgImage'].style['paddingTop'] = `70%`
      }
      this.$refs.bgImage.style['transform'] = `scale(${scale})`
      this.$refs['bgImage'].style['zIndex'] = zIndex
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/mixin.styl';
@import '~common/styles/variable.styl';

.music-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background-f4f4f4;

  .top-bar {
    z-index: 100;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 20px;

    & > i {
      position: absolute;
      width: 30px;
      line-height: 40px;
      text-align: center;
      color: $color-qq-theme = #31c27c;
    }

    .title-name {
      no-wrap();
      flex: 1;
      text-align: center;
      font-weight: 500;
      color: $color-text-fff;
      text-shadow: 1px 1px 5px #666;
    }
  }

  .bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    background-size: cover;
    transform-origin: top;
    // transition: all 0.3s;
    background-color: #666;

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color-background-f4f4f4;
  }

  .song-scroll {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    // overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;

    .song-list-wrapper {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>
