export default {
  computed: {
    models() {
      return this.$store.getters['model/getAllModels'];
    },
  },
};
