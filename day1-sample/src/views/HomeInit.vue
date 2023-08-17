<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Vue 3 app!</p>
    <router-link :to="{ name: 'Profile', params: { username: 'john_doe' } }"
      >Go to John Doe's Profile</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HomeInit",
};
</script>
