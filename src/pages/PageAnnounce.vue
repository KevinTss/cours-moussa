<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <!-- <h1>{{ title }}</h1> -->
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import AuthMixin from '../mixins/auth';

export default {
  name: 'page-announces',
  mixins: [AuthMixin],
  components: {
    NavMenu,
  },
  methods: {
   
  },
  watch: {
   
  },
  created() {
    if (!this.authUser) {
      this.$router.push({name:'login-page'});
    } else {
      this.$store.dispatch('announce/fetchOne', this.$route.params.announceId);
    }
  },
};
</script>

<style lang="css">
.page-container {
  width: 100%;
}
</style>
