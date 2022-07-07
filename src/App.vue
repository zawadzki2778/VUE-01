<template>
  <div id="app">
    <my-email />
    <add-count />
    <user-card />
    <search-name />
    <redact-photo />
  </div>
</template>

<script>
import MyEmail from "@/components/MyEmail.vue";
import AddCount from "@/components/AddCount.vue";
import UserCard from "@/components/UserCard.vue";
import SearchName from "@/components/SearchName.vue";
import RedactPhoto from "@/components/RedactPhoto.vue";
export default {
  name: "App",
  components: { MyEmail, AddCount, UserCard, SearchName, RedactPhoto },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
