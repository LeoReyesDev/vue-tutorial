<template>
  <div>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <button @click="incrementAge">Increase Age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        age: 30,
      },
    };
  },
  methods: {
    incrementAge() {
      this.user.age++;
    },
  },
  watch: {
    "user.age": function (newAge, oldAge) {
      console.log(`Age changed from ${oldAge} to ${newAge}`);
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
