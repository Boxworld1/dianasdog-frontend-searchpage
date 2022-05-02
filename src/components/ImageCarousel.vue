<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <!-- <div class="carousel-indicators">
      <template v-for="(image, key) in imageList">
        <button
          v-if="key == 0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="key"
          class="active"
          aria-current="true"
          :key="key"
        ></button>
        <button
          v-else
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="key"
          :key="key"
        ></button>
      </template>
    </div> -->
    <div class="carousel-inner">
      <template v-for="(image, key) in imageList">
        <div class="carousel-item active" :class="{ active: key==0 }" :key="key">
          <img :src="image" class="d-block w-100" alt="" />
        </div>
      </template>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ImageCarousel",
  props: {
    imageList: {
      type: Array,
      default: () => [
        "http://p1-dcd.byteimg.com/img/motor-img/6ed2508e2edf0fc8de32cb00897d2271~240x0.png",
        "http://p1-dcd.byteimg.com/img/motor-img/59653d417fe0fbb72328343b169e8d98~240x0.png",
        "http://p6-dcd.byteimg.com/img/motor-img/2a738cde9d6b91bd5fd67606fc3b308b~240x0.png",
        "http://p1-dcd.byteimg.com/img/motor-img/73765fe41507955301bd91c390a0505b~240x0.png",
        "http://p3-dcd.byteimg.com/img/motor-img/59653d417fe0fbb72328343b169e8d98~240x0.png",
        "http://p3-dcd.byteimg.com/img/motor-img/73765fe41507955301bd91c390a0505b~240x0.png",
        "http://p1-dcd.byteimg.com/img/motor-img/6ed2508e2edf0fc8de32cb00897d2271~240x0.png",
        "http://p9-dcd.byteimg.com/img/motor-img/2a738cde9d6b91bd5fd67606fc3b308b~240x0.png",
      ],
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
