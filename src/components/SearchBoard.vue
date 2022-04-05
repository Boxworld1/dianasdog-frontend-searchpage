<template>
  <div id="search-board">
    <SearchBox :query="query" :search="search"/>
    <CardBox :cardContent="cardContent"/>
  </div>
</template>

<script>
import SearchBox from "./SearchBox"
import CardBox from "./CardBox"
export default {
  name: 'SearchBoard',
  components: {
    SearchBox,
    CardBox,
  },
  data(){
    return {
        query: "",
        cardContent: "666",
    }
  },
  methods:{
      search(query) {
          this.query = query;
          this.cardContent = query;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-board {
    margin-top: 20px;
}

</style>
