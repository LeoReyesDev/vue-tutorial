<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item._id">
        {{ item.name }}
      </li>
    </ul>

    <!-- Pagination Controls -->
    <button @click="fetchItems(currentPage - 1)" :disabled="currentPage === 0">
      Previous
    </button>
    <button @click="fetchItems(currentPage + 1)">Next</button>
  </div>
</template>

<script>
import axios from "./axiosConfig";

export default {
  data() {
    return {
      items: [],
      currentPage: 0,
    };
  },
  created() {
    this.fetchItems(this.currentPage);
  },
  methods: {
    async fetchItems(page) {
      const response = await axios.get(`/items?page=${page}`);
      this.items = response.data;
      this.currentPage = page;
    },
  },
};
</script>
