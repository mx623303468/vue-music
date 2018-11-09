<template>
  <transition name="singer-slide">
    <div class="singer-detail">
      singer-detail
    </div>
  </transition>
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
