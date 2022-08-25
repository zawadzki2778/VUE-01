<template>
  <input
    type="text"
    class="search"
    v-model="searchText"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "MyImput",
  data() {
    return { searchText: "" };
  },
};
</script>

<style lang="scss" scoped>

</style>