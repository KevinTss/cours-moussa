<template>
  <div class="container-about">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    about
    {{JSON.stringify($store.state.users)}}
    <button @click="addUser">add user</button>
  </div>
</template>

<script>
export default {
  methods: {
    addUser() {
      this.$store.commit('addUser')
    }
  }
}
</script>

<style>
.container-about {
  display: flex;
  flex-direction: column;
}
nav {
  display: flex;
}
</style>
