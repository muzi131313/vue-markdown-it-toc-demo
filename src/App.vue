<template>
  <div id="app">
    <div id="nav">
      <!-- <img :src="`${$BASE_URL}/favicon.ico`" alt=""> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'App',
  created () {
    this.init()
  },
  methods: {
    async init () {
      const resp = await this.$api.queryOrg({
        jsonConditions: {
          op: 'or',
          elements: [
            {
              param: 'name',
              op: 'contains',
              values: '北京'
            }
          ]
        }
      }, {
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // }
      })
      // eslint-disable-next-line
      console.log('resp: ', resp)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
