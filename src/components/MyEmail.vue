<template>
  <div class="root">
    <label>
      введите e-mail:
      <input type="email" :value="email" @input="addMail" />
    </label>
    <label>
      введите пароль:
      <input type="password" :value="password" @input="addPassword" />
    </label>
  </div>
</template>

<script>
export default {
  name: "MyEmail",
  data() {
    return {
      email: "m.zawadzki@icol.com",
      password: "zawadzki2778",
    };
  },
  methods: {
    addMail(event) {
      this.email = event.target.value;
      console.log(event.target.value);
    },
    addPassword(event) {
      this.password = event.target.value;
    }
  },
};
</script>

<style lang="scss" scoped>
.root {
  margin-top: 40px;
  background-color: rgb(221, 56, 56);
}
</style>