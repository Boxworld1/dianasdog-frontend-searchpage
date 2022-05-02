<template>
  <div class="p-3">
    <div id="medicineBox" class="card col h-100">
      <div class="card-body">
        <h5 class="card-title text-center">{{ content.item.display.title }}</h5>
        <h6 class="card-subtitle mb-2 text-center">{{ content.item.display.type }}</h6>
        <MedicineNavTab :itemKey="itemKey" :content="content.item.display.tab"/>
      </div>
    </div>
  </div>
</template>

<script>
import MedicineNavTab from "@/components/MedicineNavTab"
export default {
  name: "MedicineCard",
  components: {
    MedicineNavTab,
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
