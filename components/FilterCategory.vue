<template>
  <div class="mt-4 flex justify-content">
    <select @change="filterData($event)" class="mx-auto w-9/12">
      <option value=""></option>
      <option v-for="(item, index) in categories" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterCategory",
  methods: mapActions(["filterData"]),
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
};
</script>