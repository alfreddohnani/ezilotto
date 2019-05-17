<template>
  <div id="app">
    <app-navbar/>

    <router-view/>

    <app-footer/>
  </div>
</template>

<script>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  name: "app",
  components: {
    AppNavbar: Navbar,
    AppFooter: Footer
  }
};
</script>


<style lang="scss">
body {
  font-size: 20px;
  line-height: 125%;
  /*    font-family: 'PT Sans', sans-serif;*/
  font-family: "Muli", sans-serif;
}

.section-title {
    font-weight: 300;
    font-size: 2.5rem;
    color: transparent;
    background-image: linear-gradient(to right, #363795, #005C97);
    -webkit-background-clip: text;
    margin-bottom: 2rem;
}

.card {
    border:none;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
}

section{
    padding: 70px 0;
}
</style>
