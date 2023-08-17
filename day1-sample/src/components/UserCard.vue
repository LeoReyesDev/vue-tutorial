<template>
  <div class="user-card">
    <slot name="header">
      <h3>{{ username }}</h3>
    </slot>
    <p>{{ bio }}</p>
    <button @click="sendMessage">Message</button>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    bio: String,
  },
  methods: {
    sendMessage() {
      this.$emit("message", this.username);
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
}
</style>
