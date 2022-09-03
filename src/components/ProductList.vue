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
          title: "polygon-blue",
          price: 745,
          imgUrl: "4876885.jpg",
          count: 33,
        },
        {
          title: "marin-sity",
          price: 666,
          imgUrl: "18823.jpg",
          count: 51,
        },
        {
          title: "polygon-forest",
          price: 999,
          imgUrl: "4904045.jpg",
          count: 6,
        },
        {
          title: "marin-maxxis",
          price: 400,
          imgUrl: "4915474.jpg",
          count: 22,
        },
        {
          title: "polygon MT Bromo",
          price: 1200,
          imgUrl: "MTBROMO_N8_2022.jpg",
          count: 22,
        },
        {
          title: "noname",
          price: 771,
          imgUrl: "4905861.jpg",
        },
      ],
    };
  },
  methods: {
    addGoods(index) {
      console.log(index + 1);
      console.log(this.products);
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
  flex-wrap: wrap;
}

button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 14px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
