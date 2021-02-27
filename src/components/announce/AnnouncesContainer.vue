<template>
  <div class="announces-container">
    <announce-card
      v-for="announce in data"
      :key="announce.id"
      :id="announce.id"
      :date="announce.created_at"
    />
    <div v-if="pagination.totalPage > 1" class="pagination">
       <el-button icon="el-icon-arrow-left"/>
       <el-button
          v-for="(page, index) in pagination.totalPage"
          :key="page"
          :disabled="pagination.current === index"
       >
        {{ page }}
      </el-button>
       <el-button icon="el-icon-arrow-right"/>
    </div>
  </div>
</template>

<script>
import AnnounceCard from './AnnounceCard.vue';

export default {
  name: 'announces-container',
  components: { AnnounceCard },
  props: {
    storeNode: {
      type: String,
      default: 'getAnnounces'       //**1
    },
  },
  computed: {
    data() {
      return this.$store.getters[`announce/${this.storeNode}`];
    },
    pagination() {
        // totalPage: 0,
        // current: null,
        // perPage: null,
      return this.$store.getters[`announce/${this.storeNode}Pagination`];
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
