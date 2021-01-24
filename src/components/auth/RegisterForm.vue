<template>
  <form @submit="register">
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register(event) {
      event.preventDefault();

      this.$store.dispatch("auth/register", {
        email: this.email,
        password: this.password,
        user_type: "particular",
        country_name: "BE",
        phone: "470 12 45 78",
      });
    },
  },
};
</script>
