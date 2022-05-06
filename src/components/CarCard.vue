<template>
  <div class="p-3">
    <div class="card col h-100">
      <ImageCarousel
        :imageList="content.picture"
        :myID="'car' + itemKey.toString()"
        :width="75+'%'"
      />
      <div class="card-body">
        <h5 class="card-title text-center" id="carcard_title">
          {{ content.item.display.title }}
        </h5>
        <CarNavTab
          :content="content.item.display.sub_brands.item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel";
import CarNavTab from "@/components/CarNavTab";

export default {
  name: "CarCard",
  components: {
    ImageCarousel,
    CarNavTab,
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
