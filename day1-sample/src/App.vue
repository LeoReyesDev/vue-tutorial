<template>
  <div id="app">
    <header>
      <h1>{{ message }}</h1>
    </header>

    <section>
      <input
        v-model="newItem"
        @keyup.enter="addItem"
        placeholder="Add a new item..."
      />
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
          <button @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>

      <div v-if="items.length === 0">No items added yet.</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Day 1 Vue Sample App",
      newItem: "",
      items: [],
      nextId: 1,
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() === "") return;

      this.items.push({
        id: this.nextId,
        text: this.newItem.trim(),
      });

      this.newItem = "";
      this.nextId++;
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
/* Simple styling for better visualization */
header {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

section {
  max-width: 500px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

button:hover {
  background-color: #d32f2f;
}
</style>
