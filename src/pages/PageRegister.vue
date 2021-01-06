
<template>
  <div class="container-register-page">
    <nav-menu />
    <h1>Register</h1>
    <register-form />
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import RegisterForm from '../components/auth/RegisterForm';

export default {
  components: {
    RegisterForm,
    NavMenu,
  },
};
</script>

<style>
.container-register-page {
  display: flex;
  flex-direction: column;
}
</style>
