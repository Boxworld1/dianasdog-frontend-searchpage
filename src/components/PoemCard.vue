<template>
  <div class="p-3">
    <div id="poemBox" class="card col h-100">
      <div class="card-body">
        <h5 class="card-title text-center">{{content.item.display.title}}</h5>
        <h6 class="margin-bottom mb-2 text-center">{{content.item.display.writer}}</h6>
        <p class="card-text text-center">
          {{content.item.display.detail}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PoemCard",
  components: {
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
