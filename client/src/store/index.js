import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './modules/oauth';

// Load Vuex
Vue.use(Vuex);

// Create Store
const myStore = new Vuex.Store({
  modules: {
    myOAuth: oauth
  }
});

export default myStore;
