<template>
  <div id="app">
    <HomePage v-if="get_path()=='/'"/>
    <SearchBoard v-else/>
  </div>
</template>

<script>
import SearchBoard from './components/SearchBoard.vue'
import HomePage from './views/HomePage.vue'

export default {
  name: 'app',
  components: {
    SearchBoard,
    HomePage
  },
  methods: {
    get_path() {
      return document.location.pathname
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
