<template>
  <div class="p-3">
    <div id="medicineBox" class="card col h-100">
      <ImageCarousel
        :imageList="content.picture"
        :myID="'medicine' + itemKey.toString()"
      />
      <div class="card-body">
        <h5 class="card-title text-center" id="medicinecard_title">
          {{ content.item.display.title }}
        </h5>
        <h6 class="card-subtitle mb-2 text-center" id="medicinecard_type">
          {{ content.item.display.type }}
        </h6>
        <MedicineNavTab
          :itemKey="itemKey"
          :content="content.item.display.tab"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MedicineNavTab from "@/components/MedicineNavTab";
import ImageCarousel from "@/components/ImageCarousel";
export default {
  name: "MedicineCard",
  components: {
    MedicineNavTab,
    ImageCarousel,
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
