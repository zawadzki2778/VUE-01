<template>
  <div id="app">
    <my-email />
  </div>
</template>

<script>
import MyEmail from "@/component/MyEmail.vue"
export default {
  name: "App",
  components: { MyEmail },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
