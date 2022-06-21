<template>
  <div class="root">
    <label>
      введите email:
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
    },
    addPassword(event) {
      this.password = event.target.value;
    }
  },
};
</script>