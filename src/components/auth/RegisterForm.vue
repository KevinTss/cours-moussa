<template>
  <form @submit="register">
    <input type="email" name="email" v-model="email">
    <input type="password" name="password" v-model="password">
    <button type="submit">Register</button>
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
    register(event) {
      event.preventDefault()

      API.post('register', {
        email: this.email,
        password: this.password,
        user_type: "particular",
        country_name: "BE",
        phone: "470 12 45 78"
      }).then(res => {
        // const {token, user} = res.data
        const token = res.data.data.token
        // const user = res.data.data.user

        window.localStorage.setItem('token', token)
      }).catch(error => {
        console.log('err', error.message)
      })
    },
  }
}
</script>
