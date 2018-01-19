import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    token: null,
    user: null,
    isAuth: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setIsAuth (state, isAuth){
      state.isAuth = isAuth
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setIsAuth ({commit}, isAuth){
      commit('setIsAuth', isAuth)
    }
  }
})
