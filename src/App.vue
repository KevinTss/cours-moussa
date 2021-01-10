<template>
  <div id="app">
    <p v-if="!hasRequestSent">loading...</p>
    <router-view v-else/>
  </div>
</template>

<script>
import API from './api';

export default {
  name: 'App',
  data() {
    return {
      hasRequestSent: false
    };
  },
  created() {
    const token = window.localStorage.getItem('token');
    if (token) {
      API.get('user').then(res => {
        const user = res.data;
        this.$store.commit('auth/setAuthUser', user);
        // this.$i18n.locale = user.language
        this.hasRequestSent = true;
      }).catch(error=>{
        console.log('err', error.message);
        this.hasRequestSent = true;
      });
    } else {
      this.hasRequestSent = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
