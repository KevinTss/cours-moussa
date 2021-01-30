<template>
  <div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="16" :offset="4">
          <form-step :currentStep="Number(step - 1)" />
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="16" :offset="4">
          <new-announce-form-step-1
            v-if="step === 1"
            @changeStep="changeStep"
          />
          <new-announce-form-step-2
            v-else-if="step === 2"
            @changeStep="changeStep"
          />
          <new-announce-form-step-3
            v-else-if="step === 3"
            @changeStep="changeStep"
          />
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import NewAnnounceFormStep1 from '../components/announce/NewAnnounceFormStep1';
import NewAnnounceFormStep2 from '../components/announce/NewAnnounceFormStep2';
import NewAnnounceFormStep3 from '../components/announce/NewAnnounceFormStep3';
import FormStep from '../components/announce/stepForm';
import BrandMixin from '../mixins/brand';

export default {
  name: 'page-create-announce',
  mixins: [BrandMixin],
  components: {
    NavMenu,
    NewAnnounceFormStep1,
    NewAnnounceFormStep2,
    FormStep,
    NewAnnounceFormStep3,
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    checkStep(route) {
      const currentStep = route.query.step;
      this.step = Number(currentStep);
      if (!['1', '2', '3'].includes(currentStep)) {
        this.$router.push({ query: { step: 1 } });
      } else {
        if (
          (route.query.step === '2' || route.query.step === '3') &&
          !this.$store.getters['form/getCreateAnnounceFromData'].body
        ) {
          console.log('redirect');
          this.$router.push({ query: { step: 1 } });
        } else {
          console.log('ok');
        }
      }
    },
    changeStep(step) {
      this.$router.push({ query: { step } });
    },
  },
  watch: {
    '$route.query'(newValue) {
      this.step = newValue.step;
    },
    $route(nv) {
      this.checkStep(nv);
    },
  },
  created() {
    if (this.brands < 1) {
      this.$store.dispatch('brand/fetchBrands');
    }
    this.checkStep(this.$route);
  },
};
</script>

<style lang="css">
.page-container {
  width: 100%;
}
</style>
