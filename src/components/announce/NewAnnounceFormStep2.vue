<template>
  <el-form>
    <el-row>
      <div
        v-for="catId in catIds"
        :key="`${catId}-category`"
      >
        <el-col :span="6">
          <div 
            v-for="equipment in equipementsByCategories[catId]"
            :key="`${equipment.id}-checkbox`"
            class="checkbox"
          >
            <input 
              type="checkbox" 
              :id="equipment.id" 
              name="equipments" 
              :value="equipment.id"
            >
            <label :for="equipment.id">{{ equipment.option_name }}</label>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-button @click="() => this.$emit('changeStep', 1)"
      >Previous step</el-button
    >
    <el-button
      :disabled="!checked.length"
      @click="() => this.$emit('changeStep', 3)"
      >Next Step</el-button
    >
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
    //TODO: suppr condition false
    if (!this.formData.body && !this.formData.body === false) {
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
      this.equipments.forEach((equipment) => {
        const catId = equipment.category_equipment_id;
        const catArray = groups[catId] || [];
        catArray.push(equipment);
        groups[catId] = catArray;
      });
      return groups;
    },
    catIds() {
      return Object.keys(this.equipementsByCategories);
    },
  },
  methods: {
    goStep1() {
      this.$router.push({ query: { step: 1 } });
    },
    goToStep3() {
      this.$router.push({ query: { step: 3 } });
    },
  },
};
</script>

<style scoped>
.checkbox {
  border: 1px solid black;
}

</style>
