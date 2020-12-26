<template>
  <div class="container-about">
    <navMenu />
    about
    {{JSON.stringify($store.state.users)}}
    <button @click="addUser">add user</button>
  </div>
</template>

<script>
  import NavMenu from '../components/layouts/NavMenu'
export default {
    components:{
      NavMenu
    },
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
