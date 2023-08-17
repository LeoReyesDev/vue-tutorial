<template>
  <div>
    <UserCard
      :username="username"
      bio="This is a sample bio"
      @message="handleMessage"
    >
      <template #header>
        <h2>Profile: {{ username }}</h2>
      </template>
    </UserCard>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
export default {
  props: {
    username: String,
  },
  components: {
    UserCard,
  },
  methods: {
    handleMessage(username) {
      alert(`Message sent to ${username}!`);
    },
  },
};
</script>
