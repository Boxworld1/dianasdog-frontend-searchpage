<template>
  <div>
    <nav>
      <div class="nav nav-tabs" role="tablist">
        <button
          v-for="(items, index) in content"
          :key="index"
          class="nav-link"
          :class="{active: index==0}"
          data-bs-toggle="tab"
          :data-bs-target="'#mynav' + itemKey.toString() + '_' + index.toString()"
          type="button"
          role="tab"
        >
          {{ items.tag }}
        </button>
      </div>
    </nav>
    <div class="tab-content" v-for="(items, index) in content" :key="index">
      <div
        v-once
        class="tab-pane fade"
        :id="'mynav' + itemKey.toString() + '_' + index.toString()"
        :class="{show: index==0, active: index==0}"
        role="tabpanel"
      >
        <div v-for="(item, key1) in items.series_list.item" :key="key1">
          <p class="card-text" v-if="key1 < 4">
            {{ item.series_name }}, {{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTab",
  props: {
    itemKey: {
      type: Number,
      default: () => 0,
    },
    content: {
      type: Array,
      default: () => [],
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
