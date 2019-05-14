<template>
  <div>
    <b-navbar class="app-navbar" toggleable="md" type="dark" variant="primary">
      <div class="container">
        <router-link tag="b-navbar-brand" :to="{name:'home'}">EZILOTTO LOGO</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-link class="btn btn-danger btn-sm" to router-tag="b-nav-item">Play Now</b-link>
          </b-navbar-nav>

          <b-navbar-nav class="mx-auto">
            <b-nav-item href="#">EziCoins</b-nav-item>
            <b-nav-item href="#">Results</b-nav-item>
            <b-nav-item href="#">News</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Contact</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto ">
            <b-link class="btn btn-primary m-1 btn-sm" :to="{ name: 'register' }">Register</b-link>
            <b-link class="btn btn-primary m-1 btn-sm" :to="{ name:'login' }">Login</b-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.app-navbar {
  font-size: 1rem;
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

