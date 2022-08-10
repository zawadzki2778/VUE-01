<template>
  <input type="text" class="search" v-model="searchText" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "MyImput",
  model: {
    prop: 'value',
    event: 'input'
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>