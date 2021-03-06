<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
       <h1>{{ JSON.stringify(getAnnounce(announceId)) }}</h1>
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import AuthMixin from '../mixins/auth';
import AnnounceMixin from '../mixins/announces';

export default {
  name: 'page-announces',
  mixins: [AuthMixin, AnnounceMixin],
  components: {
    NavMenu,
  },
  computed: {
    announceId() {
      return Number(this.$route.params.announceId);
    },
  },
  created() {
    if (!this.authUser) {
      this.$router.push({name:'login-page'});
    } else {
      this.fetchAnnounceIfNotAlreadyDone(this.announceId);
    }
  },
};
</script>

<style lang="css">
.page-container {
  width: 100%;
}
</style>
