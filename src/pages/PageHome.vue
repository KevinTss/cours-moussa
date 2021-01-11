<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <h1>Welcome</h1>
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import AuthMixin from "../mixins/auth";
export default {
  mixins: [AuthMixin],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavMenu
  },
};
</script>

<style>
.page-container {
  width: 100%;
}
</style>
