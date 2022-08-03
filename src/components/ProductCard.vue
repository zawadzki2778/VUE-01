<template>
  <div class="product-card">
    <img :src="imgUrl" width="300px" />
    <div class="product-card__info">
      <h3>{{ title }}</h3>
      <p class="price">{{ price }} рублей</p>
      <p class="count">на складе {{ count }} шт.</p>
      <button type="button" @click="addGoods">в корзину</button>
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
        "https://img.freepik.com/premium-vector/photo-frame-icon-empty-photo-blank-vector-on-isolated-transparent-background-eps-10_399089-1290.jpg?w=2000",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    addGoods() {
      this.$emit('addGoods')
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  margin-top: 40px;
  background-color: rgb(160, 212, 252);
  border: 1px solid rgb(0, 47, 255);
  padding: 20px 15px;
  &__info {
    margin-top: 20px;
  }
}
button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  cursor: pointer;
  margin-left: 10px;
}
</style>