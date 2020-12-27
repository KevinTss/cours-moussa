<template>
  <div>
    <div v-if="$store.state.initialState.authUser">
      <b-nav>
        <img id="avatar" src="$store.state.initialState.authUser.profile_picture_url"
             width="60">
        <!--<span>{{$store.state.initialState.authUser.profile_picture_url}}</span>-->
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
  //console.log($store.state.initialState.authUser['profile_picture_url'])
export default {

  methods: {
    logout() {
      this.$store.commit('setInitialState')
      this.$router.push({ path: '/' })
    }
  }
}


</script>
<style>
  #avatar
  {
    border-radius: 50%;
  }
</style>