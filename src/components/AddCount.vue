<template>
  <div class="input">
    <h2 v-bind:title="msg"> {{title}} </h2>  <!--выведет msg при наведении курсора в отдельном окне -->
    <button type="button" @click="decrease">-</button>
    <input type="number" :value="count" :min="minValue" :max="maxValue" />
    <button type="button" @click="increase">+</button>
  </div>
</template>

<script>
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
  methods: {
    increase() {
      if (this.count < this.maxValue) {
        this.count++;
      }
    },
    decrease() {
      if (this.count > this.minValue) {
        this.count--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>