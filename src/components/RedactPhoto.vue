<template>
  <div class="conteiner">
    <div class="flex">
      <div class="photo">
        <img
          v-if="isVisible"
          src="../assets/dessert-7291251__340.jpg"
          :class="imgFilters"
          :style="imgStyles"
        />
        <p v-else>Мороженое закончилось ...<b> ) </b></p>
      </div>
      <div class="redact">
        <div class="filters">
          <label>
            Ширина {{ imgSizes.currentWidth }}
            <input
              type="range"
              :value="imgSizes.currentWidth"
              @input="imgSizes.currentWidth = $event.target.value"
              :max="imgSizes.maxWidth"
            />
          </label>
          <label>
            Высота {{ imgSizes.currentHeight }}
            <input
              type="range"
              :value="imgSizes.currentHeight"
              @input="imgSizes.currentHeight = $event.target.value"
              :max="imgSizes.maxHeight"
            />
          </label>
        </div>
        <button @click="imgFilters.sepia = !imgFilters.sepia">сепия</button>
        <button @click="imgFilters.border = !imgFilters.border">рамка</button>
        <button @click="isVisible = !isVisible">
          {{ `${isVisible ? "скрыть" : "показать"}` }}
        </button>
      </div>
    </div>
    <change-style />
  </div>
</template>

<script>
import ChangeStyle from "./ChangeStyle.vue";
export default {
  name: "RedactPhoto",
  components: { ChangeStyle },
  data() {
    return {
      isVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
      },
      imgSizes: {
        maxWidth: 340,
        maxHeight: 240,
        currentWidth: 340,
        currentHeight: 240,
      },
    };
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  // border: 3px solid purple;
}
.flex {
  display: flex;
  justify-content: center;
  border: 1.5px solid rgb(221, 56, 56);
}
.redact {
  margin-left: 50px;
}
.photo {
  width: 340px;
  height: 240px;
  background-color: #cecece;
}
img {
  display: block;
  margin: 0 auto;
  transition: 0.2s ease;
  width: 340px;
  height: 240px;
  &.sepia {
    filter: sepia(100%);
  }
  &.border {
    border: 5px solid #fffc57;
  }
}
button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  cursor: pointer;

  &.active {
    background-color: #01609b;
  }
}
.filters {
  margin: 20px 50px;
}
input[type="range"] {
  display: block;
}
</style>