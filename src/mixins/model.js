export default {
  computed: {
    models() {
      return this.$store.getters["model/getAllModels"];
    },
    isModelsFetching() {
      return this.$store.getters["model/getIsAllModelsFetching"];
    },
  },
};
