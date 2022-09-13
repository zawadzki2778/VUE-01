<template>
  <div class="container">
    <div class="message" v-for="post in allMessages" :key="post.id">
      <h3>{{ post.title }}</h3>
      <img :src="post.url" /> <!-- для получения изображения прописываем в src и вешаем v-bind -->
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

img {
  display: block;
  margin: 0 auto 10px;
  height: 50px;
  width: 150px;
}
</style>