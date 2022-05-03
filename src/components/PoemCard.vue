<template>
  <div class="p-3">
    <div class="card col h-100">
      <ImageCarousel
        :imageList="content.picture"
        :myID="'poem' + itemKey.toString()"
      />
      <div class="card-body">
        <h5 class="card-title text-center" id="poemcard_title">
          {{ content.item.display.title }}
        </h5>
        <h6 class="margin-bottom mb-2 text-center" id="poemcard_desc">
          {{ content.item.display.dynasty }} {{ content.item.display.writer }}
        </h6>
        <p class="card-text text-center" id="poemcard_detail">
          {{ content.item.display.detail }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel";

export default {
  name: "PoemCard",
  components: {
    ImageCarousel
  },
  props: {
    itemKey: {
      type: Number,
      default: () => 0,
    },
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
