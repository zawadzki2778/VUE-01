<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" v-model.trim="login" />
      <!-- модификатор trim обрезает введённые пользователем пробелы в начале и в конце -->
    </div>

    <div class="form-group">
      <label for="login">Почта:</label>
      <input
        id="email"
        type="email"
        class="form-control"
        v-model.trim="email"
      />
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

    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="country">
         <option v-for="(country, index) in countries" :key="index" :value="country.value"> <!--привязываем наши значения к option-->
          {{ country.label }} 
        </option>
      </select>
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
      country: "",
      countries: [
        {
          label: "Беларусь",
          value: "Belarus",
        },
        {
          label: "Россия",
          value: "Russia",
        },
        {
          label: "Польша",
          value: "Poland",
        },
      ],
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
