<template>
  <div>
    <div v-if="authUser">
      <b-nav>
        <img id="avatar" v-bind:src="authUser.profile_picture_url"
             width="60">
        <b-nav-item>
          <b-link @click="$store.dispatch('logout')">Logout</b-link>
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
import AuthMixin from '../../mixins/auth'

export default {
  mixins: [AuthMixin],
}
</script>

<style>
  #avatar {
    border-radius: 50%;
  }
</style>
