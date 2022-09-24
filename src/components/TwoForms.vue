<template>
  <div class="forms">
    <component :is="component"></component>
    <!--добавляем 'динамический компонент' через спец.тег'-->
    <button type="button" @click="component = 'AuthForm'">авторизация</button>
    <button type="button" @click="component = 'RegForm'">регистрация</button>
  </div>
</template>

<script>
import AuthForm from "./AuthForm.vue";
import RegForm from "./RegForm.vue";
export default {
  components: { AuthForm, RegForm },
  name: "TwoForms",
  data() {
    return {
      component: "AuthForm",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>