<template>
  <div class="p-3">
    <div id="bookBox" class="card col h-100">
      <!-- <img
        src="http://p6-dcd.byteimg.com/img/motor-img/60f7fe399047c36208591432805404b0~240x0.png"
        class="card-img-top"
        alt=""
      /> -->
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
export default {
  name: "BookCard",
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
