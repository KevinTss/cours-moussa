<template>
  <div class="container-login-page">
    <nav-menu />
    <h1>Login</h1>
    <login-form />
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu'
import LoginForm from '../components/auth/LoginForm'

export default {
  components: {
    LoginForm,
    NavMenu
  },
}
</script>

<style>
.container-login-page {
  display: flex;
  flex-direction: column;
}
</style>
