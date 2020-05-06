<template>
  <div id="app">
    <!--    <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style>
  html,
  body {
    color: #333333;
    margin: 0;
    padding: 0;
  }
  .cell{
    text-align: center;
  }
  
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  }
</style>
