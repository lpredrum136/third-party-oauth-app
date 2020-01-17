<template>
  <b-container>
    <b-alert v-if="myOAuth.tokenLoading" show variant="info" class="text-center"
      >Authorising...</b-alert
    >
    <template v-else>
      <p>Authenticated</p>
    </template>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AuthoriseCallback',
  computed: mapGetters(['myOAuth']),
  methods: {
    ...mapActions(['exchangeCodeForToken'])
  },
  created() {
    this.exchangeCodeForToken({
      authorisation_code: this.$route.query.authorisation_code
    });
  }
};
</script>

<style></style>
