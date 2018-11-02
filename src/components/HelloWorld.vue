<template>
  <div class="hello">
    HelloWorld
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~common/styles/variable.styl'
  .hello{
    color: $color-background-theme
  }
</style>
