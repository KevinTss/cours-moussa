<template>
  <el-form label-position="top">
    <el-form-item label="Email">
      <el-input type="email" name="email" v-model="email" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input type="password" name="password" v-model="password" />
    </el-form-item>
    <el-button-group>
      <el-button @click="login" type="submit">Login</el-button>
      <router-link to="/register" class="link">or register?</router-link>
    </el-button-group> 
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
