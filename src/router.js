import VueRouter from 'vue-router'

import AcyncAwait from './components/AcyncAwait.vue';
import AddCount from './components/AddCount.vue';
import MyEmail from './components/MyEmail.vue';
import MyInput from './components/MyInput.vue';
import MyTitle from './components/MyTitle.vue';
import ProductCard from './components/ProductCard.vue';
import ProductList from './components/ProductList.vue';
import RedactPhoto from './components/RedactPhoto.vue';
import RevesText from './components/ReversText.vue';
import SearchName from './components/SearchName.vue';
import UserCard from './components/UserCard.vue';

export default new VueRouter({
    routes: [
        { path: '', component: AcyncAwait },
        { path: '/two', component: AddCount },
        { path: '/three', component: MyEmail },
        { path: '/four', component: MyInput },
        { path: '/five', component: MyTitle },
        { path: '/six', component: ProductCard },
        { path: '/seven', component: ProductList },
        { path: '/eight', component: RedactPhoto },
        { path: '/nine', component: RevesText },
        { path: '/ten', component: SearchName },
        { path: '/eleven', component: UserCard },
    ],
    mode: 'history'
}) 