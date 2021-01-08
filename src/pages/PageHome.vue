<template>
  <div class="container-home">
    <nav-menu />
    <div>
      <h2>
        Is connected?
      </h2>
      <label v-if="authUser">{{ $t('hello') }}  {{JSON.stringify(authUser.name)}}</label>

    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import AuthMixin from "../mixins/auth";
export default {
  mixins: [AuthMixin],
  components: {
    NavMenu
  },
};
</script>

<style>
.container-home {
  display: flex;
  flex-direction: column;
}
</style>
