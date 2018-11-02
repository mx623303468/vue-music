<template>
  <div class="tab-nav">
    <router-link tag="div" class="item active" to="/recommend">
      <span class="tab-link">推荐</span>
      </router-link>
    <router-link tag="div" class="item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
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
@import '~common/styles/variable.styl'
  .tab-nav
    color $color-text-333
    background-color $clor-background-f4f4f4
    display flex
    .item
      flex 1
      text-align center
      line-height 40px
      box-sizing border-box
      .tab-link
        font-size $font-size-14
        display inline-block
        padding 0 8px
    .router-link-active
      .tab-link
        border-bottom 1px solid $color-background-theme
        font-size $font-size-16
        color $color-background-theme
</style>
