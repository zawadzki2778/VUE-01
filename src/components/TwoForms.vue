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
      component: "AuthForm", //форму авторизацииации ставлю по умолчания для отображения первой//
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.forms {
  max-width: 400px;
  margin: 20px auto;
  border: 2px solid black;
}
button {
  margin: 8px;
}
label {
  margin-right: 5px;
}
</style>