<template>
  <div>
    <div v-if="$store.state.authUser">
      <b-nav>
        <img src="$store.state.authUser">
        <b-nav-item>
          <b-link @click="logout">Logout</b-link>
        </b-nav-item>
      </b-nav>
    </div>
    <div v-else>
      <b-nav>
        <b-nav-item>
          <b-link to="/login">LOGIN</b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/register">REGISTER</b-link>
        </b-nav-item>
      </b-nav>
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
