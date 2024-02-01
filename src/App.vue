<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name"/>
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script> 
 import Navbar from './components/Navbar/Navbar.vue';
 import Footer from './components/Footer/Footer.vue';

export default {
  data: function() {
    return{
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger"
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');

  * {
    font-family: 'Nunito', sans-serif;
    /* font-weight: bold; */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container {
    margin: 50px;
    min-height: 250px;
  }
  h1 {
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
