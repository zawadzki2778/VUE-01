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
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
        >
          <!-- :value - привязываем наши значения к option-->
          {{ country.label }}
        </option>
      </select>
    </div>
    <!-- select с возможностью выбора нескольких тем одновременно -->
    <div class="form-group">
      <label for="themes">Любимые темы:</label>
      <select
        id="themes"
        class="form-control"
        v-model="favoriteThemes"
        multiple
      >
        <!--multiple -> для выбора нескольких вариантов из списка (с привязкой к массиву) -->
        <option v-for="(theme, index) in themes" :key="index">
          <!-- option - Тег определяет отдельные пункты списка, создаваемого с помощью контейнера select-->
          {{ theme.label }}
        </option>
      </select>
    </div>
    <!-- отображаю два режима работы с checkbox -->
    <!-- 1. через один checkbox -->
    <!--связываем его с булевой переменной через v-model -->
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification"
        v-model="agreeSendEmail"
      />
      <label class="form-check-label" for="notification"
        >Уведомлять меня о чём то новом</label
      >
    </div>
    <!-- 2. когда несколько checkbox делаем через переменную с пустым массивом. должны быть полe value и разные ID   -->
    <div class="two-checkbox">
      <div class="form-group form-check">
        <input
          type="radio"
          value="one"
          class="form-check-input"
          id="one"
          v-model="info"
        />
        <label class="form-check-label" for="one">уведомлять </label>
      </div>
      <div class="form-group form-check">
        <input
          type="radio"
          value="two"
          class="form-check-input"
          id="two"
          v-model="info"
        />
        <label class="form-check-label" for="two">не уведомлять</label>
      </div>
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
      country: "Belarus", // 1.связвваем с v-model 2.можно поставить страну из массива, которая будет отображаться по умолчанию
      favoriteThemes: [],
      countries: [
        {
          label: "Беларусь", // то что видит пользователь //
          value: "Belarus", // то что уходит на сервер //
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
      themes: [
        {
          label: "наука",
          value: "science",
        },
        {
          label: "искусство",
          value: "art",
        },
        {
          label: "спорт",
          value: "sport",
        },
      ],
      info: "one",
      // 1. для первого вариантау checkbox
      agreeSendEmail: true,
      //2. для второго варианта
    };
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  margin: 30px auto;
  padding-bottom: 20px; //добавил чтобы низ края окна не сливался с открытой консолью
}
.form-group {
  margin: 15px auto;
  text-align: left;
  max-width: 500px;
}
.two-checkbox {
  display: flex;
  width: 500px;
  margin: 0 auto;
}
</style>
