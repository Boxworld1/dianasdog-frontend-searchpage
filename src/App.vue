<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 100px; height: 100px">
    <SearchBoard/>
  </div>
</template>

<script>
import SearchBoard from './components/SearchBoard.vue'

export default {
  name: 'app',
  components: {
    SearchBoard
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
  margin-top: 40px;
}
</style>
