<template>
  <div>
    <h2>получаем</h2>
    <h2>{{ users[2].city }} передаёт привет Серёге от {{ users[0].name }}</h2>
  </div>
</template>

<script>
export default {
  name: "AcyncAwait",
  data() {
    return {
      title: "получаем VUE",
      users: [],
      result: {},
    };
  },
  async mounted() {
    const response = await fetch(
      "https://mocki.io/v1/dd6120b0-8539-4dc3-b405-2291071dc0ea"
    );
    this.users = await response.json();
    console.log(this.users);
  },
};
</script>

<style lang="scss" scoped>
</style>