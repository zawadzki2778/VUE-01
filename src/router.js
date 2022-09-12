import VueRouter from 'vue-router'

import MainPage from './components/MainPage.vue';
import AcyncAwait from './components/AcyncAwait.vue';
import FirstVuex from './components/FirstVuex.vue';
import MyEmail from './components/MyEmail.vue';
import ProductCard from './components/ProductCard.vue';
import ProductList from './components/ProductList.vue';
import RedactPhoto from './components/RedactPhoto.vue';
import RevesText from './components/ReversText.vue';
import SearchName from './components/SearchName.vue';
import UserCard from './components/UserCard.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: MainPage, name: 'MainPage' },
    { path: '/1', component: AcyncAwait, name: 'AcyncAwait' },
    { path: '/2', component: FirstVuex, name: 'FirstVuex' },
    { path: '/3', component: MyEmail, name: 'MyEmail' },
    { path: '/4', component: ProductCard, name: 'ProductCard' },
    { path: '/5', component: ProductList, name: 'ProductList' },
    { path: '/6', component: RedactPhoto, name: 'RedactPhoto' },
    { path: '/7', component: RevesText, name: 'RevesText' },
    { path: '/8', component: SearchName, name: 'SearchName' },
    { path: '/9', component: UserCard, name: 'UserCard' },
  ],
  mode: 'history'
}) 