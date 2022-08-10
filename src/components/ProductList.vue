<template>
  <div class="product-list">
    <div class="product-card">
      <h2>МАГАЗИН ВЕЛОСИПЕДОВ</h2>
      <my-input v-model="searchText" />
      {{ searchText }}
      <button>поиск</button>
      <ul class="list">
        <li v-for="(product, index) in products" :key="index">
          <product-card
            :title="product.title"
            :price="product.price"
            :img-url="product.imgUrl"
            :count="product.count"
            @addGoods="addGoods(index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import MyInput from "./MyInput.vue";
export default {
  name: "ProductList",
  components: { ProductCard, MyInput },
  data() {
    return {
      searchText: "",
      products: [
        {
          title: "Велосипед Деревяшка",
          price: 745,
          count: 33,
        },
        {
          title: "Велосипед Космо",
          price: 666,
          imgUrl: "/features_type5_1.jpg",
          count: 51,
        },
        {
          title: "Велосипед Яблоко",
          price: 999,
          imgUrl: "http://moy.bike/wp-content/uploads/apple-velo.jpg",
          count: 6,
        },
      ],
    };
  },
  methods: {
    addGoods(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  margin-top: 50px;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: baseline; //сделал названия и хар-ки товаров по одной оси
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
