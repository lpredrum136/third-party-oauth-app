<template>
  <b-jumbotron class="text-center" style="height: 100vh; margin-bottom: 0">
    <template v-slot:header>OAuth Third-Party App</template>

    <template v-slot:lead
      >This is Open Authentication 2.0 using Authorisation Code Flow and
      Resource Owner Password Flow</template
    >

    <hr class="my-4" />

    <b-button variant="success" :href="myOAuth.oauthUrl" class="mx-2"
      >Login with Authorisation Code Flow</b-button
    >
    <b-button variant="info" to="/ropc-login" class="mx-2"
      >Login with Resource Owner Password Credentials Flow</b-button
    >
  </b-jumbotron>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Landing',
  computed: mapGetters(['myOAuth']),
  methods: { ...mapActions(['getOAuthUrl']) },
  created() {
    this.getOAuthUrl();
  }
};
</script>

<style scoped></style>
