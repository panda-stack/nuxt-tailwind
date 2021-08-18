<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mx-8">
      <div
        v-for="item in data"
        :key="item.id"
        class="
          border border-gray-300
          rounded
          bg-white
          text-center
          relative
          h-40
          sm:h-44
          md:h-52
        "
      >
        <img :src="item.image" alt="image" class="h-full w-full" />
        <div
          class="
            absolute
            bottom-0
            mx-auto
            bg-black bg-opacity-70
            text-white
            w-full
          "
        >
          <p>
            {{ item.name }}
          </p>
          <p>${{ item.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters({
      data: "getProducts",
    }),
  },
  created() {
    this.fetchData(1);
  },
};
</script>