export default {
  computed: {
    announces() {
      return this.$store.getters['announce/getAnnounces'];
    },
    getAnnounce() {
      return (id) =>
        this.$store.getters['announce/getAnnounces'].find((a) => a.id === id);
    },
  },
  methods: {
    fetchAnnounce(id) {
      this.$store.dispatch('announce/fetchOne', id);
    },
    fetchAnnounceIfNotAlreadyDone(id) {
      this.getAnnounce(id) || this.fetchAnnounce(id);
    },
  },
};
