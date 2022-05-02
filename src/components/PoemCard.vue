<template>
  <div class="p-3">
    <div id="poemBox" class="card col">
      <div class="card-body">
        <ImageCarousel/>
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
import ImageCarousel from "@/components/ImageCarousel"
export default {
  name: "PoemCard",
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
