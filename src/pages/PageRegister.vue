<template>
  <div class="container-register-page">
    <nav-menu />
    <h1>Register</h1>
    <div class="form-container">
      <register-form />
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import RegisterForm from '../components/auth/RegisterForm';
import AuthMixin from '../mixins/auth';

export default {
  mixins: [AuthMixin],
  components: {
    RegisterForm,
    NavMenu,
  },
  created () {
    this.authUser && this.$router.push({name:'home-page'});
  },
};
</script>

<style>
.container-register-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-container {
  width: 350px;
  margin: 50px auto;
}
</style>
