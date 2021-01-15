<template>
  <el-container id="app">
    <p v-if="!hasRequestSent">loading...</p>
    <router-view v-else/>
  </el-container>
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
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
html, body {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-select-dropdown__item.hover {
  background-color: red;;
}
</style>
