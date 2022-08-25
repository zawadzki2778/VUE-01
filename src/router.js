import VueRouter from 'vue-router'

import AcyncAwait from './components/AcyncAwait.vue';
import AddCount from './components/AddCount.vue';
import MyEmail from './components/MyEmail.vue';
// import MyInput from './components/MyInput.vue';
// import MyTitle from './components/MyTitle.vue';
import ProductCard from './components/ProductCard.vue';
import ProductList from './components/ProductList.vue';
import RedactPhoto from './components/RedactPhoto.vue';
import RevesText from './components/ReversText.vue';
import SearchName from './components/SearchName.vue';
import UserCard from './components/UserCard.vue';

export default new VueRouter({
  routes: [
    { path: '', component: AcyncAwait, name: 'AcyncAwait' },
    { path: '/1', component: AddCount, name: 'AddCount' },
    { path: '/2', component: MyEmail, name: 'MyEmail' },
    // { path: '/3', component: MyInput, name: ' MyInput' },
    // { path: '/4', component: MyTitle, name: 'MyTitle' },
    { path: '/5', component: ProductCard, name: 'ProductCard' },
    { path: '/6', component: ProductList, name: 'ProductList' },
    { path: '/7', component: RedactPhoto, name: 'RedactPhoto' },
    { path: '/8', component: RevesText, name: 'RevesText' },
    { path: '/9', component: SearchName, name: 'SearchName' },
    { path: '/10', component: UserCard, name: 'UserCard' },
  ],
  mode: 'history'
}) 