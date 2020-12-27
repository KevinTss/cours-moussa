<template>
  <div class="container-home">
    <nav-menu />
    <div>
      <h2>
        Is connected?
      </h2>
      <label>Welcome <span v-if="this.$store.state.authUser">{{JSON.stringify(this.$store.state.authUser.name)}}</span></label>

    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu'

export default {
  components: {
    NavMenu
  },
}
</script>

<style>
.container-home {
  display: flex;
  flex-direction: column;
}
</style>
