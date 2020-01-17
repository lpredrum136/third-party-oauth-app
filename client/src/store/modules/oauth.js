import axios from 'axios';

const state = {
  oauthUrl: '',
  token: null,
  tokenLoading: true
};

const getters = { myOAuth: state => state };

const actions = {
  // Get OAuth URL
  async getOAuthUrl({ commit }) {
    try {
      const res = await axios.get('/api/oauth');
      commit('GET_OAUTH_URL', res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  },

  // Exchange authorisation code for token
  async exchangeCodeForToken({ commit }, formData) {
    try {
      const res = await axios.post('/api/oauth', formData);
      commit('EXCHANGE_CODE_FOR_TOKEN', res.data);
    } catch (error) {
      console.log(error.response.data);
      commit('EXCHANGE_CODE_FOR_TOKEN_FAIL');
    }
  }
};

const mutations = {
  GET_OAUTH_URL: (state, oauthUrl) => {
    state.oauthUrl = oauthUrl.authUrl;
  },
  EXCHANGE_CODE_FOR_TOKEN: (state, data) => {
    state.tokenLoading = false;
    state.token = data.token;
  },
  EXCHANGE_CODE_FOR_TOKEN_FAIL: state => {
    state.tokenLoading = false;
    state.token = null;
  }
};

export default { state, getters, actions, mutations };
