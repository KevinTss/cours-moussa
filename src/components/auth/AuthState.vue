<template>
  <div>
    <span v-if="$store.state.authUser">Connecté</span>
    <span v-else>Non connecté</span>
  </div>
</template>

<script>
export default {

}
</script>
