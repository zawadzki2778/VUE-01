<template>
  <div class="redact">
    <div class="flex">
      <div class="photo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUt3vqN53q0gDCX5inoL21SMMt-w9TR5hUwA&usqp=CAU"
          alt="my photo))"
        />
        <p>Собачка вышла на прогулку</p>
      </div>
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
      <div class="buttons"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedactPhoto",
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-around;
  .photo {
    width: 60vw; /* Ширина */
    height: 30vh; /* Высота */
  }
  .filters {
    background-color: rgb(168, 224, 255);
    flex-wrap: nowrap;
    padding: 10px;
    width: 60vw; /* Ширина */
    height: 30vh; /* Высота */
  }
  .buttons {
    background-color: rgb(255, 121, 121);
    width: 60vw; /* Ширина */
    height: 30vh; /* Высота */
  }
}
</style>