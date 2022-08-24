<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
}
li {
  list-style-type: none;
}
span {
  color: rgb(200, 0, 0);
  text-shadow: 5px;
  font-weight: bold;
}
</style>
