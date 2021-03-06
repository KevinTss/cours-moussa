export default {
  computed: {
    conversations() {
      return this.$store.getters['conversation/getAll'];
    },
    getCurrentConversation() {
      return this.$store.getters['conversation/getCurrentConversation'];
    },
  },
};
