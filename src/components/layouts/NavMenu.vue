<template>
    <div class="nav-bar">
        <span>Logo</span>
        <b-nav>
            <b-nav-item>
                <b-link to="/">HOME</b-link>
            </b-nav-item>
            <b-nav-item>
                <b-link to="/about">ABOUT</b-link>
            </b-nav-item>
            <template v-if="authUser">
                <b-nav-item>
                    <b-link to="/members">MEMBERS</b-link>
                </b-nav-item>
                <b-nav-item>
                    <b-link to="/announces/new">CREATE ANNOUNCE</b-link>
                </b-nav-item>
            </template>
        </b-nav>
    <auth-state/>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import AuthState from '../auth/AuthState';
  import AuthMixin from '../../mixins/auth';

  export default {
      mixins: [AuthMixin],
      components: {
          AuthState
      },
  };
</script>

<style>
.nav-bar {
    display: flex;
}
</style>
