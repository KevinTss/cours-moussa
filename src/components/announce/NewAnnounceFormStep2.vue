<template>
    <el-form>
         <form-step/>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
    </el-form>
</template>
<script>
    import FormStep from './stepForm';

    export default {
        components: {
            FormStep,
        },
       created() {
           console.log('', this.formData);
           if (!this.formData.body) {
               this.$router.push({path: '/announces/new'});
           }
       },
       computed: {
           formData() {
                return this.$store.getters['form/getCreateAnnounceFromData'];
            },
       },
    };
</script>
