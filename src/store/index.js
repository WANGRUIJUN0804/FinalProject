// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    username: null,
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.username = payload.username;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    userId: state => state.userId,
    username: state => state.username,
  }
});
