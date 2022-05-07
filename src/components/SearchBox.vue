<template>
  <div id="searchBox">
    <div class="input-group">
      <input
        type="text"
        class="form-control border-secondary"
        placeholder="type something..."
        id="searchText"
        v-model="text"
        maxlength="50"
      />
      <button
        class="btn btn-outline-primary bg-white border-secondary"
        type="button"
        id="searchButton"
        @click="onClicked()"
      >
        <img src="@/assets/icon_search.svg" style="width: 20px" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    searchText: {
      type: String,
      default: () => ""
    },
  },
  watch: {
    searchText() {
      this.text = this.searchText;
    },
  },
  data() {
    return {
      text: "",
      query: "",
    };
  },
  methods: {
    onClicked() {
      window.location.assign("/query/" + encodeURIComponent(this.text));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 800px) {
  #searchBox {
    width: 800px !important;
  }
}
#searchBox {
  width: 90%
}
#searchText {
  font-size: 1.2rem;
}
</style>
