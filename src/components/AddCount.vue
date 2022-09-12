<template>
  <div class="container">
    <div class="input">
      <h2 v-bind:title="msg">{{ title }}</h2>
      <!--выведет msg при наведении курсора в отдельном окне -->
      <button type="button" @click="decrease">-</button>
      <input type="number" :value="count" :min="minValue" :max="maxValue" />
      <button type="button" @click="increase">+</button>
    </div>

    <div class="message" v-for="post in allMessages" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddCount",
  data() {
    return {
      title: "выберите количество",
      msg: "спасибо",
      minValue: 0,
      maxValue: 10,
      count: 1,
    };
  },

  // ---
  computed: mapGetters(["allMessages"]), // назв.массива д.совпадать с названием геттера из client.js
  methods: mapActions(["fetchMessages"]),
  async mounted() {
    // this.$store.dispatch('fetchMessages');
    this.fetchMessages();
  },
  // -----------*-----------*------------*----------*--------------
  // methods: {
  //   increase() {
  //     if (this.count < this.maxValue) {
  //       this.count++;
  //     }
  //   },
  //   decrease() {
  //     if (this.count > this.minValue) {
  //       this.count--;
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.message {
  border: 1px solid blue;
  border-radius: 5px;
  margin: 100px auto 20px;
  width: 25%;
}
</style>