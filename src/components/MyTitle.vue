<template>
  <h1 class="hi">номер {{ run }}</h1>
</template>

<script>
export default {
  props: {
    run: {
      type: [Number],
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hi {
  font-size: 25px;
  color: tomato;
  text-align: center;
}
</style>