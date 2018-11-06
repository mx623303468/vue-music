<template>
  <div class="loading">
    <img width="24" height="24" src="~common/images/default.gif" alt="loading">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: '正在加载...'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/mixin'
@import '~common/styles/variable'

  .loading
    center()
    text-align center
    // background-color red
    .desc
      line-height 20px
      font-size $font-size-14
      color $color-qq-theme = #31c27c
</style>
