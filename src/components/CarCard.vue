<template>
  <div class="p-3">
    <div id="carBox" class="card col">
      <ImageCarousel
        :imageList="content.picture"
        :myID="'car' + itemKey.toString()"
      />
      <div class="card-body">
        <h5 class="card-title">{{ content.item.display.title }}</h5>
        <NavTab :itemKey="itemKey" :content="content.item.display.sub_brands.item"/>
        <!-- <div
          v-for="(items, index) in content.item.display.sub_brands.item"
          :key="index"
        >
          <h6 class="card-subtitle">{{ items.tag }}</h6>
          <div v-for="(item, key) in items.series_list.item" :key="key">
            <p class="card-text" v-if="key < 4">{{item.series_name}}, {{item.price}}</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel";
import NavTab from "@/components/NavTab"

export default {
  name: "CarCard",
  components: {
    ImageCarousel,
    NavTab,
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
