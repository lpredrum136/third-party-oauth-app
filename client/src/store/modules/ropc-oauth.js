import axios from 'axios';
import client from './client';
import myStore from '../index';
import router from '../../router';

const state = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true
};

const getters = { myRopcOAuth: state => state };

const actions = {
  async getRopcToken({ commit }, formData) {
    // Get client info first
    await client.actions.getClient({ commit });
    const clientInfo = myStore.state.myClient.client;
    const { client_id, client_secret, redirect_uri, scopes } = clientInfo;

    // User credentials from formData
    const { username, password } = formData;

    // Send to auth server to get token
    try {
      const res = await axios.post('http://localhost/cioauth/api/ropc-oauth', {
        username,
        password,
        grant_type: 'password',
        client_id,
        client_secret,
        redirect_uri,
        scopes
      });

      // Save it in localStorage
      commit('GET_ROPC_TOKEN_SUCCESS', res.data);

      router.push('/posts');
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

const mutations = {
  GET_ROPC_TOKEN_SUCCESS: (state, tokenInfo) => {
    localStorage.setItem('token', tokenInfo.token.access_token);
    state.loading = false;
    state.isAuthenticated = true;
    state.token = tokenInfo.token;
  }
};

export default { state, getters, actions, mutations };
