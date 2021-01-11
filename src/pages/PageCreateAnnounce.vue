<template>
<div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
        <el-row :gutter="10">
            <el-col :span="16" :offset="4">
                <form-step :currentStep="step"/>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="16" :offset="4">
                <new-announce-form v-if="step === 1"/>
                <new-announce-form-step-2 v-else-if="step === 2" />
                <!-- <new-announce-form-step-3 v-else-if="step === 3"/> -->
            </el-col>
        </el-row>
    </el-main>
</div>
</template>

<script>
    import NavMenu from "../components/layouts/NavMenu";
    import NewAnnounceForm from '../components/announce/NewAnnounceForm';
    import NewAnnounceFormStep2 from '../components/announce/NewAnnounceFormStep2';
    import FormStep from '../components/announce/stepForm';
    import BrandMixin from '../mixins/brand';

    export default {
        name: "page-create-announce",
        mixins: [BrandMixin],
        components: {NavMenu, NewAnnounceForm, NewAnnounceFormStep2, FormStep},
        data() {
            return {
                step: 1
            };
        },
       
        watch: {
            '$route.query'(newValue) {
                this.step = newValue.step;
            }
        },
        mounted() {
            console.log('coucou', this.$route.query);
            if(this.brands < 1) {
                this.$store.dispatch('brand/fetchBrands');
            }
            if (this.$route.query.step === "1") {
                this.step = 1;
            } else if (this.$route.query.step === "2") {
                this.step = 2;
            } else if (this.$route.query.step === "3") {
                this.step = 3;
            }
        }
    };
</script>

<style lang="css" >
.page-container {
  width: 100%;
}
</style>
