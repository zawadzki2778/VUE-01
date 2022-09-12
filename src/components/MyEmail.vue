<template>
  <div class="container">
    <div class="root">
      <label>
        введите e-mail:
        <input type="email" v-model="email" @input="addMail" />
      </label>
      <label>
        введите пароль:
        <input type="password" :value="password" @input="addPassword" />
      </label>
      {{ email }}
    </div>

    <div class="count">
      <h2 v-bind:title="msg">{{ title }}</h2>
      <!--msg при наведении курсора в отдельном окне-->
      <button type="button" @click="decrease">-</button>
      <input type="number" :value="count" :min="minValue" :max="maxValue" />
      <button type="button" @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyEmail",
  data() {
    return {
      email: "m.zawadzki@icol.com",
      password: "zawadzki2778",
      //-------для счётчика---------//
      title: "выберите количество",
      msg: "спасибо",
      minValue: 0,
      maxValue: 10,
      count: 1,
    };
  },
  methods: {
    addMail(event) {
      this.email = event.target.value;
      console.log(event.target.value);
    },
    addPassword(event) {
      this.password = event.target.value;
    },
    // --------для счётчика----------//
    increase() {
      if (this.count < this.maxValue) {
        this.count++;
      }
    },
    decrease() {
      if (this.count > this.minValue) {
        this.count--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.root {
  margin-top: 40px;
  background-color: rgb(221, 56, 56);
}

.count {
  margin: 30px auto;
}
</style>