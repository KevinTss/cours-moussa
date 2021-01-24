export default {
  computed: {
    authUser() {
      return this.$store.getters["auth/getAuthUser"];
    },
  },
};
