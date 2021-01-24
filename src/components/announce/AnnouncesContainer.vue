<template>
  <div class="announces-container">
    <announce-card
      v-for="announce in data"
      :key="announce.id"
      :id="announce.id"
      :date="announce.created_at"
    />
  </div>
</template>

<script>
import AnnounceCard from "./AnnounceCard.vue";

export default {
  name: "announces-container",
  components: { AnnounceCard },
  computed: {
    data() {
      return this.$store.getters["announce/getAllAnnounces"];
    },
  },
};
</script>

<style scoped>
.announces-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
</style>
