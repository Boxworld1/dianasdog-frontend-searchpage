<template>
  <div id="search-board" class="container">
    
    <SearchBox :query="query" :search="search" />
    <div class="row-cols-3 row gx-4 gy-4">
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
      <CardBox :cardContent="cardContent" />
    </div>
  </div>
</template>

<script>
import request_json from "../utils/communication";
import SearchBox from "./SearchBox";
import CardBox from "./CardBox";
export default {
  name: "SearchBoard",
  components: {
    SearchBox,
    CardBox,
  },
  data() {
    return {
      query: "",
      cardContent: "666",
    };
  },
  methods: {
    search(query) {
      this.query = query;
      var query_json = {
        query: this.query,
      };
      request_json.POST(this.query_succeed, this.get_result, query_json);
    },
    query_succeed(bool) {
      if (bool) {
        alert("查询成功！");
      } else {
        alert("查询失败！");
      }
    },
    get_result(res) {
      this.cardContent = res;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
