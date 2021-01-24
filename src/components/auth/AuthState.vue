<template>
  <div class="auth-state">
    <el-dropdown v-if="authUser">
      <div class="name">
        <el-avatar
          size="small"
          icon="el-icon-user-solid"
          :src="authUser.profile_picture_url"
        />
        <span class="user-name"> {{ authUser.name }}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="$store.dispatch('logout')"
          >Logout</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>

    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<script>
import AuthMixin from "../../mixins/auth";

export default {
  mixins: [AuthMixin],
};
</script>

<style scoped>
.auth-state {
  display: flex;
}
.user-name {
  padding: 0 10px;
}
</style>
