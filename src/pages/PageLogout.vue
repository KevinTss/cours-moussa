<template>
  <div class="container-logout">
  </div>
</template>

<script>


export default {
  created() {
    this.$store.commit('setInitialState')
    this.$router.push({ path: '/' })
  }
}
</script>
