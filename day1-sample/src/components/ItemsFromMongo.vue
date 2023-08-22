<template>
  <div>
    <h2>List of Items from Database</h2>
    <p>
      In this component you can review how can be loading different items from
      mongoDB you can add and delete items
    </p>
    <ul>
      <li v-for="item in items" :key="item._id">
        {{ item.name }}
        <button @click="deleteItem(item._id)">Delete</button>
      </li>
    </ul>
    <input v-model="newItem" placeholder="New item name" />
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newItem: "",
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3000/items");
      this.items = await response.json();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  methods: {
    async addItem() {
      try {
        const response = await fetch("http://localhost:3000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: this.newItem }),
        });
        const item = await response.json();
        this.items.push(item);
        this.newItem = ""; // Clear the input field
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    async deleteItem(itemId) {
      try {
        await fetch(`http://localhost:3000/items/${itemId}`, {
          method: "DELETE",
        });
        this.items = this.items.filter((item) => item._id !== itemId);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>
