<template>
  <el-form label-position="top">
    <el-form-item label="Email">
      <el-input type="email" name="email" v-model="email" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input type="password" name="password" v-model="password" />
    </el-form-item>
    <el-button-group>
      <el-button @click="register" type="submit">Register</el-button>
      <router-link to="/login" class="link">or login?</router-link>
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
    register(event) {
      event.preventDefault();

      this.$store.dispatch('auth/register', {
        email: this.email,
        password: this.password,
        user_type: 'particular',
        country_name: 'BE',
        phone: '470 12 45 78',
      });
    },
  },
};
</script>
