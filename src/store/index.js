import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status : '',
    token : localStorage.getItem('token') || '',
    user : {},

    shop_cart : 0
  },
  mutations: {
    addShopCart(state){
      state.shop_cart++;
    },
    auth_request(state){
      state.status = 'loading'
    },

    auth_success(state, token, user){
      state.token = token
      state.user = user
      state.status = 'success'
    },

    auth_error(state){
      state.status = 'error'
    },

    logout(state){
      state.status = ''
      state.user = ''
      //state.token = ''  // it just for test and shouldnot be here
    }
  },
  actions: {
    //******  Login  *****/
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://192.168.171.1:8585/user/login',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(rej => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(rej)
          })
      })
    },
    //*****  Register *****/
    Register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://192.168.171.1:8585/user/register',
          data: user,
          method: 'Post'
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(rej => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(rej)
          })
      })
    },
    //*****  LogOut *****/
    Logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    addShopCart({commit}){
      commit('addShopCart')
    },
    // -----------------------------------------------------------------------
    getProductDetails({commit}, id){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/product/fulldetails/${id}`,
          method: "GET"
        })
        .then(resp => {
          resolve(resp.data);
          console.log("hahah")
        })
        .catch(err =>{
          reject(err);
          console.log("nahhannn")
        })
      })
    },
    getTourDetails({commit}, id){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/tour/fulldetails/${id}`,
          method: "GET"
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        })
      })
    },
    getBlogDetails({commit}, id){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/blog/fulldetails/${id}`,
          method: "GET"
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        })
      })
    },


//----------------- get all data -------------------------------
    getProductsDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/products`,
          method: 'GET'
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        })
      })
    },
    getToursDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/tours`,
          method: 'GET'
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        })
      })
    },
    getBlogsDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://192.168.171.1:8585/blogs`,
          method: 'GET'
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        })
      })
    }
    
  },
  getters: {
    isLoggedIn: state => !!state.token, 
    authStatus: state => !!state.status,
    user: state => state.user,
    shop_cart: state => state.shop_cart
  },


  // modules are new in vue
  modules: {
  }
})
