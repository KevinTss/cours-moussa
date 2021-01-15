<template>
    <el-form>
        <el-checkbox-group 
            v-for='catId in catIds'
            :key="`${catId}-category`"
            v-model="checked"
        >
            <el-checkbox 
            v-for="equipment in equipementsByCategories[catId]" 
            :key="`${equipment.id}-checkbox`"
                :label="equipment.option_name"
                :value="equipment.id"
            />
        </el-checkbox-group>

        <el-button @click="goStep1">Previous step</el-button>
        <el-button :disabled="true" @click="goToStep3" >Next Step</el-button>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                checked: [],
            };
        },
       created() {
           if (!this.formData.body) {
               this.goStep1();
           } else {
                this.$store.dispatch('equipment/fetchEquipments');
           }
       },
       computed: {
           formData() {
                return this.$store.getters['form/getCreateAnnounceFromData'];
            },
            equipments() {
             return this.$store.getters['equipment/getAllEquipment'];
            },
            equipementsByCategories() {
                const groups = {};
                this.equipments.forEach(equipment => {
                       const catId = equipment.category_equipment_id;
                       const catArray = groups[catId] || [];
                       catArray.push(equipment);
                       groups[catId] = catArray;
                   });
                   return groups;
            },
            catIds() {
                return Object.keys(this.equipementsByCategories);
            }
           
       },
       methods: {
           goStep1() {
               this.$router.push({name:'create-announce-page', query: {step: 1}});
           },
           goToStep3() {
            //    this.$router.push({path:'/announces/new/step3'});
           }
       }
    };
</script>
