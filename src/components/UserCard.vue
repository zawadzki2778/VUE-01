<template>
  <div class="mokko">
    <div class="card">
      <h2>список пользователей</h2>
      <div class="list">
        Сейчас у нас <span>{{ users.length }}</span> человек
        <div class="items">
          <ul>
            <li v-for="(user, index) in users" :key="index">
              {{ `${index + 1} ${getNames(user)}` }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      users: [
        {
          fName: "Michau",
          sName: "Ruba",
          lName: "Crazy",
        },
        {
          fName: "Cuba",
          sName: "Duda",
          lName: "Sokolowski",
        },
        {
          fName: "Gzegoz",
          sName: "Ragor",
          lName: "McKey",
        },
      ],
    };
  },
  methods: {
    getNames(user) {
      return `${user.fName} ${user.sName} ${user.lName}`.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  border: 3px solid purple;
}
span {
  color: rgb(0, 55, 114);
  text-shadow: 2px;
  font-weight: bold;
  font-style: italic;
}
.items {
    text-align: center;
  }
</style>