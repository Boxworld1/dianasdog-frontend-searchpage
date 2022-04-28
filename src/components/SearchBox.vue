<template>
  <div id="searchBox">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control border-secondary"
        placeholder="type something..."
        id="searchText"
        v-model="searchText"
      />
      <button
        class="btn btn-outline-primary bg-white border-secondary"
        type="button"
        id="button-addon2"
        @click="onClicked()"
      >
      <img src="@/assets/icon_search.svg" style="width:20px"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    Search: {
      type: Function,
      default: () => {
        return () => {};
      },
    },
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onClicked() {
      document.location.href = this.searchText
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchBox {
  width: 800px;
  
}
#searchText {
  font-size: 1.2rem;
}
</style>
