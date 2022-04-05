<template>
  <div id="search-box">
    <el-input placeholder="请输入内容" v-model="query" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="Search(query)"></el-button>
  </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    Search: {
      type:Function,
      default: ()=>{
        return ()=>{}
      }
    }
  },
  data(){
    return {
        query: ""
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-input {
    width: 40%;
    margin-bottom: 20px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
