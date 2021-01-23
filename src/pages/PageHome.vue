<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <h1>Find the best cars announces</h1>
      <search-quick />
      <announces-container/>
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import SearchQuick from "../components/announce/SearchQuick";
import AuthMixin from "../mixins/auth";
import AnnouncesContainer from '../components/announce/AnnouncesContainer';

export default {
  mixins: [AuthMixin],
  components: {
    NavMenu,
    SearchQuick,
    AnnouncesContainer,
  },
};
</script>

<style>
.page-container {
  width: 100%;
}
</style>
