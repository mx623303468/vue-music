<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/variable'

  .slider
    min-height 1px
    .slider-group
      position relative
      overflow hidden
      white-space nowrap
    .dots
      position absolute
      right 0
      left 0
      bottom 12px
      text-align center
      font-style 0
</style>
