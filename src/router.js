import { createRouter, createWebHashHistory } from 'vue-router'
import AcyncAwait from './components/AcyncAwait.vue';
import SearchName from './components/SearchName.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/one', component: AcyncAwait },
        { path: '/two', component: SearchName },
    ]
}) 