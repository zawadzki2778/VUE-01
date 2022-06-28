<template>
  <div class="search">
    <h2>поиск имени</h2>
    <input type="text" :value="enterName" />
    <p>
      всего имён: <span> {{ users.length }} </span>, совпадений:
    </p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchName",
  data() {
    return {
      enterName: "",
      users: ["Женя", "Максим", "Артур", "Павел", "Марьян", "Александр"],
    };
  },
};
</script>