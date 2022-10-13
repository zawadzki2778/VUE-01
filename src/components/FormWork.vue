<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" v-model.trim="login" />
      <p>{{ login }}</p>
    </div>

    <div class="form-group">
      <label for="login">Почта:</label>
      <input id="email" type="email" class="form-control" v-model.trim="email" />
    </div>

    <div class="form-group">
      <label for="login">Пароль:</label>
      <input
        id="password"
        type="password"
        class="form-control"
        v-model.trim="password"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "FormWork",
  data() {
    return {
      login: "",
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin: 30px auto;
  text-align: left;
  max-width: 500px;
}

button {
  margin-top: 15px;
}
</style>
