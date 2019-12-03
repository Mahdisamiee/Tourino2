import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js';



import Home from '../views/home.vue';
import Products from '../views/products.vue';
import Product_details from '../views/product-page.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/products',
    name: 'Products',
    component: Products,
    meta: {
      requiresAuth: true
    },
  },
  {
    path:'/product/:id',
    name: 'Product_Details',
    component: Product_details,
    meta: {
      requiresAuth: true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth)){
    if(store.getters.isLoggedIn){
      next()
      return;
    }
    next('/')
  }
  else{
    next()
  }
})

export default router
