<template>
  <div id="resultPage" class="container, row">
    <header>
      <SearchBox />
    </header>
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
import Request from "@/utils/communication";
import SearchBox from "@/components/SearchBox";
import CardBox from "@/components/CardBox";
export default {
  name: "ResultPage",
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
  mounted: function() {
    Request.query(this.querySucceed, this.getResult, this.getPath().slice(1));
  },
  methods: {
    getPath() {
      return document.location.pathname;
    },
    querySucceed(bool) {
      if (!bool) {
        alert("查询失败！");
      }
    },
    getResult(res) {
      this.cardContent = res;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resultPage {
  display: flex;
}

header {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  width: 100vw;
  height: 60px;
  /* display: flex; */
  align-items: center;
  margin: 0;
  padding: 10px 50px;
}
</style>
