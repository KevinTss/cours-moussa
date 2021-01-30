<template>
  <div class="locale-changer">
    <el-select
      class="select"
      v-model="$i18n.locale"
      placeholder="lang"
      size="small"
    >
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  computed: {
    langs() {
      return this.$i18n.availableLocales;
    },
  },
};
</script>

<style scoped>
.locale-changer {
  width: 80px;
}
.select {
  width: 100%;
}
</style>
