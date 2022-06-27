<template>
  <div id="app">
    <my-email />
    <add-count />
    <user-card />
  </div>
</template>

<script>
import MyEmail from "@/components/MyEmail.vue";
import AddCount from "@/components/AddCount.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "App",
  components: { MyEmail, AddCount, UserCard },
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
