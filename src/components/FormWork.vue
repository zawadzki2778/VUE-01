<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" />
    </div>

    <div class="form-group">
      <label for="login">Почта:</label>
      <input id="email" type="email" class="form-control" />
    </div>

    <div class="form-group">
      <label for="login">Пароль:</label>
      <input id="password" type="password" class="form-control" />
    </div>
  </form>
</template>

<script>
export default {
  name: "FormWork",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin: 30px auto;
  text-align: left;
  max-width: 500px;
}
// .form-control {
//   width: 400px;
// }

button {
  margin-top: 15px;
}
</style>
