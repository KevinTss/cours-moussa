<template>
  <div class="container-login-page">
    <nav-menu />
    <h1>Login</h1>
    <div class="form-container">
      <login-form />
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import LoginForm from '../components/auth/LoginForm';
import AuthMixin from '../mixins/auth';

export default {
  mixins: [AuthMixin],
  components: {
    LoginForm,
    NavMenu,
  },
  created () {
    this.authUser && this.$router.push({name:'home-page'});
  },
};
</script>

<style>
.container-login-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-container {
  width: 350px;
  margin: 50px auto;
}
</style>
