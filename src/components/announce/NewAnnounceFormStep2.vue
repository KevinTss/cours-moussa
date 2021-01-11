<template>
    <el-form>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
        <el-button @click="goStep1">Previous step</el-button>
        <el-button :disabled="true" @click="goToStep3" >Next Step</el-button>
    </el-form>
</template>
<script>
    export default {
       created() {
           if (!this.formData.body) {
               this.goStep1();
           }
       },
       computed: {
           formData() {
                return this.$store.getters['form/getCreateAnnounceFromData'];
            },
       },
       methods: {
           goStep1() {
               this.$router.push({name:'create-announce-page', query: {step: 1}});
           },
           goToStep3() {
            //    this.$router.push({path:'/announces/new/step3'});
           }
       },
    };
</script>
