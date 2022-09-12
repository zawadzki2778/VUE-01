<template>
  <div class="container">
    <div class="message" v-for="post in allMessages" :key="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FirstVuex",
  computed: mapGetters(["allMessages"]), // назв.массива д.совпадать с названием геттера из client.js
  methods: mapActions(["fetchMessages"]),
  async mounted() {
    this.fetchMessages();
  },
};
</script>

<style lang="scss" scoped>

.container {
  margin: 0px auto;
  text-align: center;
  padding-bottom: 20px;
}

.message {
  border: 2px solid blue;
  border-radius: 5px;
  margin: 20px auto;
  width: 600px;
}
</style>