<template>
  <div
    :id="myID"
    class="carousel carousel-dark slide"
    data-bs-ride="false"
    v-if="imageList.length > 0"
  >
    <div class="carousel-inner">
      <template v-for="(image, key) in imageList">
        <div class="carousel-item" :class="{active: key==0}" :key="key">
          <img :src="image" class="d-block mx-auto" :width="width" :height="height" alt="" />
        </div>
      </template>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#'+myID"
      data-bs-slide="prev"
      id="imagecarousel_left_button"
      v-if="imageList.length > 1"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#'+myID"
      data-bs-slide="next"
      id="imagecarousel_right_button"
      v-if="imageList.length > 1"
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
    myID: {
      type: String,
      default: () => "carouselExampleIndicators"
    },
    imageList: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: () => "auto"
    },
    width: {
      type: String,
      default: () => "auto"
    }
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
