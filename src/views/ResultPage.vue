<template>
  <div>
    <header class="d-flex justify-content-center">
      <a id="searchIcon" href="/" class="d-none d-md-block mr-4">Search</a>
      <SearchBox :searchText="text"/>
    </header>
    <div id="resultPage" class="container">
      <div class="row-cols-1 row-cols-md-2 row-cols-xl-3 row p-3">
        <template v-for="content, key in contentList">
          <CarCard v-if="content.type == 'car'" :key="key" :itemKey="key" :content="content"/>
          <PoemCard v-if="content.type == 'poem'" :key="key" :itemKey="key" :content="content"/>
          <BookCard v-if="content.type == 'book'" :key="key" :itemKey="key" :content="content"/>
          <MedicineCard v-if="content.type == 'medicine'" :key="key" :itemKey="key" :content="content"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Request from "@/utils/communication";
import SearchBox from "@/components/SearchBox";
import CarCard from "@/components/CarCard";
import BookCard from "@/components/BookCard";
import PoemCard from "@/components/PoemCard";
import MedicineCard from "@/components/MedicineCard";

export default {
  name: "ResultPage",
  components: {
    SearchBox,
    CarCard,
    BookCard,
    PoemCard,
    MedicineCard,
  },
  data() {
    return {
      text: "",
      query: "",
      contentList: [],
    };
  },
  mounted: function () {
    this.text = decodeURIComponent(this.getPath()).slice(1)
    Request.query(this.querySucceed, this.getResult, this.text);
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
      this.contentList = res;
      this.contentList = this.contentList.map((content) => JSON.parse(content))
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchIcon {
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  margin: 0 20px;
  text-decoration:none;
}

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
  padding: 10px;
}

#CardBox {

}
</style>
