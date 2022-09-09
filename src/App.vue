<template>
  <div class="app">
    <navbar-bootstrap />
    <router-view />
  </div>
</template>

<script>
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// импорт компонент
import NavbarBootstrap from "@/components/NavbarBootstrap.vue";

export default {
  name: "App",
  components: { NavbarBootstrap },
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
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
