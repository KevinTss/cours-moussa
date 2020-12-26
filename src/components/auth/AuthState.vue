<template>
  <div>
    <div v-if="$store.state.authUser">
      <b-link @click="logout">Logout</b-link>
    </div>
    <div v-else>
      <b-link to="/login">Login</b-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('setInitialState')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
