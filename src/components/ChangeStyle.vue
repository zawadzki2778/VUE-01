<template>
  <div class="box">
    <div class="change-style">
      <div
        class="circle"
        @click="isActive = !isActive"
        :class="getClasses"
      ></div>
      <div class="circle" :class="color"></div>
      <div
        class="circle"
        @mouseover="isVisible = !isVisible"
        @mouseleave="isVisible = !isVisible"
        :class="getClassesOne"
      ></div>
    </div>
    <label
      ><input type="text" v-model="color" /> введите цвет (green, red, blue,
      orange)
    </label>
  </div>
</template>

<script>
export default {
  name: "ChangeStyle",
  data() {
    return {
      isActive: false,
      isVisible: false,
      color: "",
    };
  },
  computed: {
    getClasses() {
      return {
        red: this.isActive,
        green: !this.isActive,
      };
    },
    getClassesOne() {
      return {
        orange: !this.isVisible,
        blue: this.isVisible,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  margin: 50px;
  border: 2px solid #000000;
  cursor: pointer;
}
.red {
  background: rgb(221, 56, 56);
}
.blue {
  background: #0d6efd;
}
.green {
  background: greenyellow;
}
.orange {
  background: orange;
}
input {
  text-align: center;
  border-radius: 4px;
  border: 2px solid;
  margin-bottom: 30px;
}
</style>