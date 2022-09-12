<template>
  <b-navbar toggleable type="dark" variant="primary">
    <b-navbar-brand href="#">УЧЕБНЫЙ ПРОЕКТ</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="$router.push({ name: 'MainPage' })">главная страница</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'AcyncAwait' })">запрос на сервер</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'FirstVuex' })">запрос на сервер с использованием VUEX</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'MyEmail' })">e-mail, пароль, счётчик</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'ProductCard' })">карточка продукта</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'ProductList' })">список продуктов</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'RedactPhoto' })">изменение стилей на картинке</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'RevesText' })">перевени меня</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'SearchName' })">поиск имён</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'UserCard' })">список пользователей</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavbarBootsrap",
};
</script>

 <style lang="scss" scoped>
 
.navbar-brand {
  margin-left: 16px;
  font-size: 32px;
}
.navbar-toggler {
  margin-right: 16px;
}
</style>