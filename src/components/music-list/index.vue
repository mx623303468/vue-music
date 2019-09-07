<template>
  <div class="music-list">
    <div class="top-bar">
      <i class="icon-back" @click="back"></i>
      <h1 class="title-name" v-html="title"></h1>
    </div>
    <div class="bg-image" :style="bgStyle"></div>
  </div>
</template>

<script>
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
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
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
  }
}
</style>
