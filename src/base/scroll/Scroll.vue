<template>
  <div ref="warpper">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.warpper) return
      this.scroll = new BScroll(this.$refs.warpper, {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        const _vue = this
        this.scroll.on('scroll', (pos) => {
          _vue.$emit('scroll', pos)
        })
      }
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  watch: {
    data() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
