<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.username">
        <router-link
          :to="{ name: 'Profile', params: { username: user.username } }"
        >
          {{ user.username }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeInit",
  data() {
    return {
      users: [{ username: "john_doe" }, { username: "jane_doe" }],
    };
  },
};
</script>
