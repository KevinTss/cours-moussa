const MODULE_NAME = 'brand';

export default {
  computed: {
    brands() {
      return this.$store.getters[`${MODULE_NAME}/getAllBrands`];
    },
    isBrandFetching() {
      return this.$store.$store[`${MODULE_NAME}/getIsAllBrandsFetching`];
    },
  },
};
