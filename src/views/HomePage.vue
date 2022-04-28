<template>
  <div id="searchBoard" class="d-flex justify-content-center align-items-center flex-column">
    <h1 id="title">Search</h1>
    <SearchBox :query="query" :search="search" />

  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
export default {
  name: "HomePage",
  components: {
    SearchBox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchBoard { 
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  width: 100wh;
  height: 100vh;
}
#title {
  font-size: 6rem;
}
</style>
