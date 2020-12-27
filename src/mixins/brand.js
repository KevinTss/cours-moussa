export default {
  computed: {
    brands() {
      return this.$store.getters['brand/getAllBrands'];
    },
  },
};
