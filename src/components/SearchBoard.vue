<template>
  <div id="search-board">
    <SearchBox :query="query" :search="search" />
    <CardBox :cardContent="cardContent" />
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
    //wait to test
    search(query) {
      this.query = query;
      var query_json = {
        "query": this.query
      }
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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-board {
  margin-top: 20px;
}
</style>
