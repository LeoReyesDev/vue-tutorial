<template>
  <div>
    <h2>Your Shopping Cart</h2>
    <ul v-if="cartProducts.length">
      <li v-for="product in cartProducts" :key="product.id">
        {{ product.name }} - {{ product.price }} x {{ product.quantity }}
        <button @click="increaseQuantity(product.id)">+</button>
        <button @click="decreaseQuantity(product.id)">-</button>
        <button @click="removeFromCart(product.id)">Remove</button>
      </li>
    </ul>
    <p v-else>No items in the cart.</p>
    <p>Total Items: {{ cartItemCount }}</p>
    <p>Total Price: {{ cartTotalPrice }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ShoppingCart",
  setup() {
    const store = useStore();

    const cartProducts = computed(() => store.getters.cartProducts);
    const cartItemCount = computed(() => store.getters.cartItemCount);
    const cartTotalPrice = computed(() => store.getters.cartTotalPrice);

    const removeFromCart = (productId) => {
      store.dispatch("removeProductFromCart", productId);
    };

    const increaseQuantity = (productId) => {
      store.dispatch("increaseQuantity", productId);
    };

    const decreaseQuantity = (productId) => {
      store.dispatch("decreaseQuantity", productId);
    };

    return {
      cartProducts,
      cartItemCount,
      cartTotalPrice,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    };
  },
};
</script>

<style scoped>
/* You can add any styling related to this component here */
</style>
