export default {
    computed: {
        chats() {
            return this.$store.getters['conversation/getAll'];
        },
        chat() {
            return this.$store.getters[''];
        },

    },
};