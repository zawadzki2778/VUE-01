<template>
  <form method="post">
    <h2>Регистрация</h2>
    <p>
      <label for="name">твоё имя:</label>
      <input id="name" type="text" value="">
    </p>
    <p>
      <label for="password">твой пароль:</label>
      <input id="password" type="text" value="">
    </p>
    <p>
      <label for="mail">твой e-mail:</label>
      <input id="mail" type="text" value="">
    </p>
    <button type="button" name="button">Зарегистрироваться</button>
    </form>
</template>

<script>
export default {
  name: "RegForm",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>