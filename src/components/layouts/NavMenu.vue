<template>
  <el-row :gutter="10" class="nav-bar">
    <el-col :span="2">
      <span class="logo">Logo</span>
    </el-col>
    <el-col :span="22">
      <el-menu mode="horizontal">
        <el-menu-item>
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item v-if="authUser">
          <router-link to="/announces/new">Create announce</router-link>
        </el-menu-item>
        <el-menu-item>
          <auth-state />
        </el-menu-item>
        <el-menu-item>
          <lang />
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import AuthState from "../auth/AuthState";
import AuthMixin from "../../mixins/auth";
import lang from "./lang";

export default {
  mixins: [AuthMixin],
  components: {
    AuthState,
    lang,
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.logo {
  padding: 0 20px;
}
.el-menu {
  display: flex;
  justify-content: flex-end;
}
</style>
