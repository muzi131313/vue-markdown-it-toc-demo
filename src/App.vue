<template>
  <div id="app">
    <div id="nav">
      <!-- <img :src="`${$BASE_URL}/favicon.ico`" alt=""> -->
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1140px;
  margin: 0 auto;
}
#nav {
  padding: 30px 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
