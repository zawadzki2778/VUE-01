<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">УЧЕБНЫЙ ПРОЕКТ</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="$router.push({ name: 'AcyncAwait' })">запрос на сервер</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'AddCount' })">счётчик</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'MyEmail' })">e-mail и пароль</b-nav-item>
        <!-- <b-nav-item @click="$router.push({ name: 'MyInput' })">инпут</b-nav-item> -->
        <!-- <b-nav-item @click="$router.push({ name: 'MyTitle' })">Ссылка 4</b-nav-item> -->
        <b-nav-item @click="$router.push({ name: 'ProductCard' })">Карточка продукта</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'ProductList' })">Список продуктов</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'RedactPhoto' })">Изменение стилей на картинке</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'RevesText' })">Перевени меня</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'SearchName' })">Поиск имён</b-nav-item>
        <b-nav-item @click="$router.push({ name: 'UserCard' })">Список пользователей</b-nav-item>
        <b-nav-item href="#">Ссылка 2</b-nav-item>
        <b-nav-item href="#" disabled>Отключено</b-nav-item>
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
}
.navbar-toggler {
  margin-right: 16px;
}
</style>