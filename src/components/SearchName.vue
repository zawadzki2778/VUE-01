<template>
  <div class="search">
    <h2>поиск имени</h2>
    <input type="text" v-model="enterName" />
    <p>
      всего имён: <span> {{ users.length }} </span>, 
      совпадений: <span> {{ getUser.length }} </span>
    </p>

    <ul>
      <li v-for="(user, index) in getUser" :key="index">
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
      users: [
        "Виточка",
        "Женя",
        "Максим",
        "Артур",
        "Павел",
        "Марьян",
        "Александр",
        "Миша",
        "Панда",
      ],
    };
  },
  computed: {
    getUser() {
      return this.users.filter((user) =>
        user.toLowerCase().includes(this.enterName.toLowerCase())
      );
    },
  },
};
</script>