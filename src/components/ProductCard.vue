<template>
  <div class="product-card">
    <img :src="imgUrl" width="300px" />
    <div class="product-card__info">
      <h3>{{ title }}</h3>
      <p class="price">{{ price }}</p>
      <p class="count">{{ count }}</p>
      <button type="button">в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["title", "pice", "imgUrl", "count"],
};
</script>