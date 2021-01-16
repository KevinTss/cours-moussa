<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <h1>Welcome</h1>
    </el-main>
    <search-quick />
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import SearchQuick from "../components/announce/SearchQuick";
import AuthMixin from "../mixins/auth";
export default {
  mixins: [AuthMixin],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavMenu, SearchQuick
  },
};
</script>

<style>
.page-container {
  width: 100%;
}
</style>
