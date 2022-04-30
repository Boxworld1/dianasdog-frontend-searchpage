<template>
  <div class="p-3">
    <div id="cardBox" class="card col">
      <img
        src="http://p6-dcd.byteimg.com/img/motor-img/60f7fe399047c36208591432805404b0~240x0.png"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    cardContent: {
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
