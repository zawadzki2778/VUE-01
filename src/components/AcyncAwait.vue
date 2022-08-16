<template>
  <div class="mocki">
    <h2>{{ title }}</h2>
    <hr />
    <h2>USERS DATA</h2>
    <div class="user" v-for="(user, index) in users" :key="index">
      <hr />
      <ul>
        <li>{{ user.id }}</li>
        <li>{{ user.title }}</li>
      </ul>
      <button @click="userData(user)">получить</button>
    </div>
    <hr />
    <h2>ERRORS</h2>
    <div class="error" v-for="(error, index) in errors" :key="index">
      <p>{{ errors }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "AcyncAwait",
  data() {
    return {
      title: "получаем данные с фейк-сервера",
      users: [],
      errors: [],
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const response = await fetch(
        "https://mocki.io/v1/10d2c740-0b77-4f17-97e5-d8dcdcf320b8"
      );
      try {
        this.users = await response.json();
        console.log(this.users);
      } catch (errror) {
        this.errors = await response.json();
        console.log(this.errors);
      }
    },
    userData(user) {
      console.log(user.body);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>