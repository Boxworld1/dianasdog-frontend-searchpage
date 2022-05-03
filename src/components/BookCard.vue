<template>
  <div class="p-3">
    <div class="card col h-100">
      <ImageCarousel
        :imageList="content.picture"
        :myID="'book' + itemKey.toString()"
      />
      <div class="card-body">
        <h5 class="card-title text-center" id="bookcard_title">{{content.item.display.title}}</h5>
        <p class="card-subtitle text-center" id="bookcard_desc">
          {{content.item.display.column_desc}}
        </p>
        <h6>作者</h6>
        <p class="card-text" id="bookcard_author">
          {{content.item.display.column_author}}
        </p>
        <h6>章节一览</h6>
        <p class="card-text" v-for="(item, key) in content.item.display.chapter_info" :key="key">
          {{item.title}}
        </p>
        <h6>简介</h6>
        <p class="card-text" id="bookcard_abstract">
          {{content.item.display.column_abstract}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel";

export default {
  name: "BookCard",
  components: {
    ImageCarousel,
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
