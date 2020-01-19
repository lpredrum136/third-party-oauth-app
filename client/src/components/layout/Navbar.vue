<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <i class="fas fa-code"></i> OAuth Third-Party App
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/posts">
            <i class="fas fa-book-reader"></i> Posts
          </b-nav-item>
          <b-nav-item to="/dashboard">
            <i class="fas fa-user"></i> NavItem3
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style></style>
