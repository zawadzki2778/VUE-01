<template>
  <div class="container">
    <input type="text" @keyup.enter="addTask" v-model="nowTask" />
    <!--при клике на enter срабатывает обработчик-->
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ strike: task.isDone }"
      >
        <span @click="task.isDone = !task.isDone">{{ task.text }}</span>
        <button type="buttton" @click="deliteTask(task.text)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoApp",
  data() {
    return {
      nowTask: "",
      tasks: [
        {
          text: "поиграть с сыном",
          isDone: true,
        },
        {
          text: "посмотреть фильм",
          isDone: false,
        },
        {
          text: "написать ДЗ",
          isDone: true,
        },
        {
          text: "выучить новую тему",
          isDone: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        text: this.nowTask,
        isDone: false,
      });
      this.nowTask = ""; //что-бы обнулять форму, после того как мы добавим значение
    },
    deliteTask(taskText) { //параметр в ф-ции = task.text
      this.tasks = this.tasks.filter((task) => {
        return task.text !== taskText;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
}

input {
  margin-top: 20px;
}

li {
  width: 500px;
  cursor: pointer;
  margin-top: 10px;
}

.strike {
  text-decoration: line-through; // перечеркивает заметку//
}
</style>