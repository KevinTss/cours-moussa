<template>
  <form @submit="login">
    <input type="email" name="email" v-model="email">
    <input type="password" name="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      });
    },
  }
};
</script>
