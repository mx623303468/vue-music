<template>
  <div class="music-list">
    <div class="top-bar">
      <i class="icon-back" @click="back"></i>
      <h1 class="title-name" v-html="title"></h1>
    </div>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter"></div>
    </div>
    <song-scroll :data="songs" class="song-scroll" ref="songScroll">
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </song-scroll>
  </div>
</template>

<script>
import SongScroll from 'base/scroll/scroll'
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
  components: {
    SongScroll,
    SongList
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
  },
  mounted() {
    this.$refs['songScroll'].$el.style.top = `${this.$refs['bgImage']
      .clientHeight + 2}px`
  },
  methods: {
    back() {
      this.$router.back()
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
  background-color: $color-background-f4f4f4 = #f4f4f4;

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

  .song-scroll {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;

    .song-list-wrapper {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>
