import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Pasien from '../views/pasien/index.vue'
import PasienCreate from '../views/pasien/Create.vue'
import PasienUpdate from '../views/pasien/Update.vue'
import PasienDetail from '../views/pasien/Detail.vue'
import Obat from '../views/obat/index.vue'
import ObatCreate from '../views/obat/Create.vue'
import ObatUpdate from '../views/obat/Update.vue'
import ObatDetail from '../views/obat/Detail.vue'
import Order from '../views/order/Order.vue'
import PreviewOrder from '../views/order/PreviewOrder.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/pasien',
        name: 'Pasien',
        component: Pasien,
    },
    {
        path: '/pasien/create',
        name: 'PasienCreate',
        component: PasienCreate,
    },
    {
        path: '/pasien/update/:id_pasien',
        name: 'PasienUpdate',
        component: PasienUpdate,
        props: true
    },
    {
        path: '/pasien/:id_pasien',
        name: 'PasienDetail',
        component: PasienDetail,
        props: true
    },
    {
        path: '/obat',
        name: 'Obat',
        component: Obat,
    },
    {
        path: '/obat/create',
        name: 'ObatCreate',
        component: ObatCreate,
    },
    {
        path: '/obat/update/:id_resep',
        name: 'ObatUpdate',
        component: ObatUpdate,
        props: true
    },
    {
        path: '/obat/:id_resep',
        name: 'ObatDetail',
        component: ObatDetail,
        props: true
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
    {
        path: '/order/preview',
        name: 'OrderPreview',
        component: PreviewOrder,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router