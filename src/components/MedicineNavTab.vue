<template>
  <div>
    <div>
      <b-card no-body>
        <b-tabs pills card align="center">
          <template v-for="(items, index) in content">
            <b-tab :key="index" :title="items.name" :active="index == 0">
              <div>
                <div
                  v-for="(item, key1) in items.tag"
                  :key="key1"
                  class="d-flex flex-column align-items-start"
                >
                  <h6
                    class="card-subtitle mb-2"
                    :id="'medicinenavtab_name_' + key1.toString()"
                  >
                    {{ item.name }}
                  </h6>
                  <p :id="'medicinenavtab_content_' + key1.toString()">
                    {{ item.content }}
                  </p>
                </div>
              </div>
            </b-tab>
          </template>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicineNavTab",
  props: {
    content: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
}
</style>
