<template>
  <div id="card-box">
    <p align="middle">{{cardContent}}</p>
  </div>
</template>

<script>
export default {
  name: 'CardBox',
  props:{
    cardContent: {
      type: String,
      default: () => "我是内容",
    }
  },
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
