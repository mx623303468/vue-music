<template>
  <div id="app">
    <my-header></my-header>
    <tab-nav></tab-nav>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from 'components/m-header/MyHeader'
import TabNav from 'components/tab-nav/TabNav'
export default {
  name: 'App',
  components: {
    MyHeader,
    TabNav
  }
}
</script>

<style>
</style>
