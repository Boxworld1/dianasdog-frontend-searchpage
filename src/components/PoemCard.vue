<template>
  <div class="p-3">
    <div id="poemBox" class="card col h-100">
      <div class="card-body">
        <h5 class="card-title">{{content.item.title}}</h5>
        <h6 class="margin-bottom mb-2">{{content.item.writer}}</h6>
        <p class="card-text">
          {{content.item.detail}}
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
