<template>
  <scroll class="list-view" :data="data">
    <ul>
      <li
        class="list-group"
        v-for="item in data"
        :key="item.title"
      >
        <h2 class="list-group-title">{{item.title}}</h2>
        <ul>
          <li
            class="list-group-item"
            v-for="singer in item.singers"
            :key="singer.id"
          >
            <img class="avatar" v-lazy="singer.avatar" alt="头像">
            <span class="name">{{singer.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <loading v-show="!data.length"></loading>
  </scroll>
</template>

<script type="text/javascript">
import scroll from 'base/scroll/Scroll'
import loading from 'base/loading/Loading'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    scroll,
    loading
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/variable'

  .list-view
    position absolute
    width 100%
    height 100%
    overflow hidden
    .list-group
      padding-bottom 30px
      .list-group-title
        height 30px
        line-height 30px
        padding 5px 0 5px 20px
        box-shadow 0 1px 0 #eee
        color $color-qq-theme
        font-size $font-size-18 = 18px
        background-color $color-text-d
      .list-group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 50px
          height 50px
          border-radius 50%
        .name
          margin-left 20px
          font-size $font-size-16 = 16px
          color $color-text-333
</style>
