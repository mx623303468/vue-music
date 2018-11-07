<template>
  <scroll class="list-view" :data="data" ref="listview">
    <ul>
      <li
        class="list-group"
        v-for="item in data"
        :key="item.title"
        ref="listGroup"
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
    <div class="shortcut-list">
      <ul
        @touchmove.stop.prevent="onShortcutTouchMove"
      >
        <li
          v-for="(item, index) in shortcutList"
          :key="index"
          class="item"
          :class="{current: currentIndex === index}"
          @touchstart="onShortcutTouchStart(index)"
        >{{item}}</li>
      </ul>
    </div>
    <loading v-show="!data.length"></loading>
  </scroll>
</template>

<script type="text/javascript">
import scroll from 'base/scroll/Scroll'
import loading from 'base/loading/Loading'

const ANCHOR_HEIGHT = 16

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((item) => {
        return item.title.substr(0, 1)
      })
    }
  },
  components: {
    scroll,
    loading
  },
  created() {
    this.touches = {}
  },
  methods: {
    // 手指触碰事件方法
    onShortcutTouchStart(index) {
      // 修改 currentIndex 改变当前被触碰的 DOM元素 的样式
      this.currentIndex = index
      // 获得事件对象
      let e = window.event
      // 获得当前被触碰的 DOM元素的 pageY
      let clickFirstTouch = e.touches[0].pageY
      // 保存当前 pageY 到全局对象 touches 中，便于 touchMove事件调用
      this.touches.stratTouch = clickFirstTouch

      // 调用滚动方法，传入 index，滚动到指定 DOM 元素的位置
      this._scrollToElement(index)
    },
    onShortcutTouchMove(e) {
      // 获得事件对象，并保存 pageY 到全局对象 touches 中
      let moveFirstTouch = e.touches[0]
      this.touches.endTouch = moveFirstTouch.pageY
      // 初始位置 减 滑动距离 除以 DOM 元素高度, 计算出滑动了几个 DOM 节点，并进行向下取整，保存到 moveLength
      let moveLength = (this.touches.endTouch - this.touches.stratTouch) / ANCHOR_HEIGHT | 0
      // 初始节点的 index 加上 计算出的滑动了几个节点，得到需要滚动到第几个 DOM节点位置
      let anchorIndex = parseInt(this.currentIndex) + moveLength
      // 调用滚动方法，传入 index，滚动到指定 DOM 元素的位置
      this._scrollToElement(anchorIndex)
    },
    // 对 better-scroll 的 scrollToElement 方法进行封装, 方便调用， 精简代码， 易于维护。
    _scrollToElement(index) {
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    }
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
    .shortcut-list
      position absolute
      right 0
      top 40%
      transform translateY(-50%)
      text-align center
      width 20px
      font-family: Helvetica
      .item
        padding 2px
        line-height 1
        font-size $font-size-12
        color $color-text-999
        &.current
          color $color-qq-theme
</style>
