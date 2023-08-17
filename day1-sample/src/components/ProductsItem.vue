<template>
  <div>
    <h2>Available Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const products = ref([
      { id: 1, name: "Product A", price: "$10" },
      { id: 2, name: "Product B", price: "$20" },
      { id: 3, name: "Product c", price: "$20" },
      { id: 4, name: "Product d", price: "$30" },
      { id: 5, name: "Product e", price: "$40" },
      // ... more products
    ]);

    const addToCart = (product) => {
      store.dispatch("addProductToCart", product);
      console.log("Item");
    };

    return {
      products,
      addToCart,
    };
  },
};
</script>
