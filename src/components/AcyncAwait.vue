<template>
  <div class="mocki">
    <h2>{{ title }}</h2>
    <div class="user" v-for="(user, index) in users" :key="index">
      <my-title :run="user.id" />
      <ul>
        <li>{{ user.body }}</li>
      </ul>
      <button @click="userData(user)">получить</button>
      <hr />
    </div>
    <h2>ERROR</h2>
    <div class="error" v-for="(error, index) in errors" :key="index">
      <p>{{ errors }}</p>
    </div>
  </div>
</template>

<script>
import MyTitle from "@/components/MyTitle.vue";
export default {
  name: "AcyncAwait",
  data() {
    return {
      title: "получаем данные от Mock HTTP Server",
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
      console.log(user.userId);
    },
  },
  components: { MyTitle },
};
</script>

<style lang="scss" scoped>
</style>