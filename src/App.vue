<template>
  <div id="app">
    <HomePage v-if="getPath()=='/'"/>
    <ResultPage v-else/>
  </div>
</template>

<script>
import ResultPage from './views/ResultPage.vue'
import HomePage from './views/HomePage.vue'

export default {
  name: 'app',
  components: {
    ResultPage,
    HomePage
  },
  methods: {
    getPath() {
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
  color: #2c3e50;
}
</style>
