import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js';



import Home from '../views/home.vue';
import Products from '../views/products.vue';
import Product_details from '../views/product-page.vue';
import Tours from '../views/tours.vue';
import Tour_details from '../views/tour-page.vue';
import Shop from '../views/shop-cart.vue';
import Blog from '../views/blog.vue';
import Blog_details from '../views/blog-page.vue';

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
  {
    path:'/tours',
    name: 'Tours',
    component: Tours,
    meta: {
      requiresAuth: true
    },
  },
  {
    path:'/tour/:id',
    name: 'Tour_details',
    component: Tour_details,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog,
    mata: {
      requiresAuth: true
    }
  },
  {
    path: '/blog/:id',
    name: 'Blog_details',
    component: Blog_details,
    mata: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition){//fantastic part that allow you to scroll page on changing routes
  //   if(savedPosition){                    //in this case we just scroll page to the top of page every time
  //     return savedPosition;
  //   }else{
  //     return {x: 0, y: 0};
  //   }
  // }
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
