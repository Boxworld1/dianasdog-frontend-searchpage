<template>
  <div class="p-3">
    <div id="carBox" class="card col">
      <ImageCarousel :imageList="content.picture"/>
      <div class="card-body">
        <h5 class="card-title">{{content.item.title}}</h5>
        <h6>{{content.item.writer}}</h6>
        <p class="card-text">
          {{content.item.detail}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel";

export default {
  name: "CarCard",
  components: {
    ImageCarousel,
  },
  props: {
    content: {
      type: Object,
      default: () => {},
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
