import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './modules/oauth';
import client from './modules/client';
import ropcOAuth from './modules/ropc-oauth';
import post from './modules/post';

// Load Vuex
Vue.use(Vuex);

// Create Store
const myStore = new Vuex.Store({
  modules: {
    myOAuth: oauth,
    myRopcOAuth: ropcOAuth,
    myClient: client,
    myPost: post
  }
});

export default myStore;
