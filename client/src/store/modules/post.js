import axios from 'axios';
import router from '../../router';
import setAuthToken from '../../utils/setAuthToken';

const state = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

const getters = { myPost: state => state };

const actions = {
  // Get all posts
  async getPosts({ commit }) {
    try {
      // Set headers with the token
      if (localStorage.token) setAuthToken(localStorage.token);

      const res = await axios.get('http://localhost/cioauth/api/posts');
      console.log(res.data);

      commit('GET_POSTS', res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  },

  // Add Post
  async addPost({ commit }, formData) {
    try {
      // Set headers with the token
      if (localStorage.token) setAuthToken(localStorage.token);

      const res = await axios.post(
        'http://localhost/cioauth/api/posts/create',
        formData
      );
      commit('ADD_POST', res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

const mutations = {
  GET_POSTS: (state, posts) => {
    state.posts = posts.data;
    state.loading = false;
  },
  ADD_POST: (state, post) => {
    state.posts.unshift(post);
  }
};

export default { state, getters, actions, mutations };
