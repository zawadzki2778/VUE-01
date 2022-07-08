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
        <button>сепия</button>
        <button>рамка</button>
        <button @click="isVisible = !isVisible">
          {{ `${isVisible ? "скрыть" : "показать"}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedactPhoto",
  data() {
    return {
      isVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
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
  transition: 0.2s ease;
  width: 340px;
  height: 240px;
  &.sepia {
    filter: sepia(100%);
  }
  &.border {
    border: 3px solid #043544;
  }
}
button {
  margin-right: 10px;
  &.active {
    background-color: #01609b;
  }
}
.filters {
  margin-bottom: 20px;
}
input[type="range"] {
  display: block;
}
</style>