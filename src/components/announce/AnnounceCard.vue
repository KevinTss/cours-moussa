<template>
  <div class="announce-card">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="`https://picsum.photos/200?id=${id}`" class="image" />
      <div style="padding: 14px">
        <span>{{ id }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ displayDate }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'announce-card',
  props: {
    date: {
      type: String,
      default: () => String(new Date().getTime()),
    },
    id: {
      type: Number,
      default: null,
    },
  },
  computed: {
    displayDate() {
      return moment(this.date).format('MMMM Do YYYY');
    },
  },
};
</script>

<style scoped>
.announce-card {
  padding: 10px;
}
</style>
