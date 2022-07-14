<template>
  <div class="container">
    <h2>{{ message }}</h2>
    <button @click="reversText">перевернуть</button>
  </div>
</template>

<script>
export default {
  name: "ReversText",
  data() {
    return {
      message: "ПЕРЕВЕРНИ МЕНЯ ))",
    };
  },
  methods: {
    reversText() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>