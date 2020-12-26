<template>
  <form @submit="login">
    <input type="email" name="email" v-model="email">
    <input type="password" name="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import API from '../../api'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(event) {
      event.preventDefault()

      API.post('login', {
        email: this.email,
        password: this.password
      }).then(res => {
        // const {token, user} = res.data
        const token = res.data.data.token
        const user = res.data.data.user

        window.localStorage.setItem('token', token)
        this.$store.commit('setAuthUser', user)
        this.$router.push('/')
      }).catch(error => {
        console.log('err', error.message)
      })
    },
  }
}
</script>
