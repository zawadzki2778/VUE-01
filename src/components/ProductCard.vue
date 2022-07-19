<template>
  <div class="product-card">
    <img :src="imgUrl" width="300px" />
    <div class="product-card__info">
      <h3>{{ title }}</h3>
      <p class="price">{{ price }}</p>
      <p class="count">на складе {{ count }} шт.</p>
      <button type="button">в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    price: Number,
    imgUrl: {
      type: String,
      default:
        "https://art-nto.ru/800/600/https/sun9-43.userapi.com/c855216/v855216648/2f1ff/lhP1WzUirrI.jpg",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  margin-top: 40px;
  border: 2px solid red;
}
</style>