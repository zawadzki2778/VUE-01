<template>
  <div class="product-list">
    <h1>ВЕЛОСИПЕДЫ</h1>
    <ul class="list">
      <li v-for="(product, index) in products" :key="index">
        <product-card
          :title="product.title"
          :pice="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          title: "Велосипед Деревяшка",
          price: 745,
          imgUrl:
            "https://naked-science.ru/wp-content/uploads/2016/04/article_sandwichbike-bici-armable-4.jpg",
          count: 33,
        },
        {
          title: "Велосипед Космо",
          price: 666,
          imgUrl:
            "https://thumb.tildacdn.com/tild6134-3062-4864-a130-663337633233/-/resize/480x/-/format/webp/11-1500x1500.jpg",
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
};
</script>
