<template>
  <div class="container-about">
    <nav-menu />
    about
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu'

export default {
  components:{
    NavMenu
  },
}
</script>

<style>
.container-about {
  display: flex;
  flex-direction: column;
}
</style>
