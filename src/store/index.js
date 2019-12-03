import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status : '',
    token : localStorage.getItem('token') || '',
    user : {},
  },
  mutations: {

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
          url: 'localhost:3000/login',
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
          url: 'localhost:3000/register',
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
  },
  getters: {
    isLoggedIn: state => !!state.token, 
    authStatus: state => !!state.status,
    user: state => state.user
  },


  // modules are new in vue
  modules: {
  }
})
