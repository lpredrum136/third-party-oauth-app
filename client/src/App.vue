<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';

export default {
  name: 'App',
  components: { Navbar }
};
</script>

<style>
@import './assets/styles/styles.css';
</style>
