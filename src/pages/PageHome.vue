<template>
  <div class="container-home">
    <navMenu />
    <Users />

    <div>
      <h2>
        Is connected?
      </h2>
      <p>{{JSON.stringify(this.$store.state.authUser)}}</p>
    </div>
  </div>
</template>

<script>

import NavMenu from '../components/layouts/NavMenu'
import Users from '../Users'

export default {
  components: {
    Users,
    NavMenu
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
