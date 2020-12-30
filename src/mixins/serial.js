export default {
    computed: {
        serials() {
            return this.$store.getters['serial/getAllSerials'];
        },
    },
};