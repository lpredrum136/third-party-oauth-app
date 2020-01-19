import axios from 'axios';

const state = {
  client: null,
  loading: true
};

const getters = { myClient: state => state };

const actions = {
  // Get client info
  async getClient({ commit }) {
    try {
      const res = await axios.get('/api/ropc-oauth');
      commit('GET_CLIENT_INFO', res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

const mutations = {
  GET_CLIENT_INFO: (state, clientInfo) => {
    state.loading = false;
    state.client = clientInfo;
  }
};

export default { state, getters, actions, mutations };
