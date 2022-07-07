<template>
  <div class="conteiner">
    <div class="flex">
      <div class="photo">
        <img v-if="isVisible" src="../assets/dessert-7291251__340.jpg" />
        <p v-else>Мороженое закончилось ...<b> ) </b></p>
      </div>
      <div class="redact">
        <div class="filters">
          <label>
            Ширина
            <input type="range" />
          </label>
          <label>
            Высота
            <input type="range" />
          </label>
        </div>
        <button>сепия</button>
        <button>рамка</button>
        <button @click="isVisible = !isVisible">показать / закрыть</button>
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
  width: 100%;
  height: 240px;
  &.sepia {
    filter: sepia(100%);
  }
  &.border {
    border: 3px solid #043544;
  }
  &.small {
    width: 170px;
    height: 120px;
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