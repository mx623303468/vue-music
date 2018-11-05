<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="title">My Music</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/mixin.styl';
@import '~common/styles/variable.styl';
  .m-header
    height 40px
    line-height 40px
    text-align center
    font-size 0
    background-color $color-background-theme
    .icon
      bg-image('logo')
      display inline-block
      width 26px
      height 28px
      background-size 26px 28px
      vertical-align top
      margin-top 6px
      margin-right 5px
    .title
      display inline-block
      line-height 40px
      font-size $font-size-18
      color $color-text-fff
</style>
