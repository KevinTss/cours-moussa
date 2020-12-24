<template>
  <div class="container-home">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <Users />
    <LoginForm />
    <RegisterForm />

    <div>
      <h2>
        Is connected?
      </h2>
      <p>{{JSON.stringify(this.$store.state.authUser)}}</p>
    </div>
  </div>
</template>

<script>
import Users from '../Users'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

export default {
  components: {
    Users,
    LoginForm,
    RegisterForm
  },
  methods: {
   
  },
  created() {
    console.log(this.$store.state.users)
  }
}
</script>

<style>
.container-home {
  display: flex;
  flex-direction: column;
}
nav {
  display: flex;
}
</style>
