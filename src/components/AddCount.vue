<template>
  <div class="input">
    <h2> {{title}} </h2>
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
      title: "выберите колличество",
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