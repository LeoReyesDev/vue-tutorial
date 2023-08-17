<template>
  <div>
    <h2>{{ username }}'s Profile</h2>
    <p>This is {{ username }}'s profile page.</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
};
</script>
