<template>
  <form method="post">
    <h2>Авторизация</h2>
    <p>
      <label for="password">пароль: </label>
      <input id="password" type="text" value="">
    </p>
    <p>
      <label for="mail">e-mail: </label>
      <input id="mail" type="text" value="">
    </p>
    <button type="button" name="button">Войти</button>
    </form>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>