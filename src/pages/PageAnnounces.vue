<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <h1>Mes annonces</h1>
      <announces-container storeNode="getMyAnnounces"/>
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import AuthMixin from '../mixins/auth';
import AnnouncesContainer from '../components/announce/AnnouncesContainer';

export default {
  name: 'page-announces',
  mixins: [AuthMixin],
  components: {
    NavMenu,
    AnnouncesContainer
  },
  methods: {
   
  },
  watch: {
   
  },
  created() {
    if (!this.authUser) {
      this.$router.push({name:'login-page'});
    } else {
      this.$store.dispatch('announce/fetchAll');
    }
  },
};
</script>

<style lang="css">
.page-container {
  width: 100%;
}
</style>
