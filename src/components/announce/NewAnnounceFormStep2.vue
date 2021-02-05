<template>
  <el-form>
    <el-row>
      <div
        class="checkbox-group"
        v-for="catId in catIds"
        :key="`${catId}-category`"
      >
        <h3 class="title">{{ getCatTitle(catId) }}</h3>
        <div class="checkboxes-container">
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
              @change="onEquipmentChange"
            >
            <label :for="equipment.id">{{ equipment.option_name }}</label>
          </div>
        </div>
      </div>
    </el-row>
    <el-button @click="() => this.$emit('changeStep', 1)"
      >Previous step</el-button
    >
    <el-button
      :disabled="!formData.equipments.length"
      @click="() => this.$emit('changeStep', 3)"
      >Next Step</el-button
    >
  </el-form>
</template>
<script>
export default {
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
    getCatTitle(catId) {
      // if (catId === '1') {
      //   return this.$t('securityEquipments');
      // } else if (catId === '2') {
      //   return this.$t('insideEquipments');
      // } else if (catId === '3') {
      //   return this.$t('outsideEquipments');
      // } else {
      //   return this.$t('otherEquipments');
      // }

      return {
        '1': this.$t('securityEquipments'),
        '2': this.$t('insideEquipments'),
        '3': this.$t('outsideEquipments'),
        '4': this.$t('otherEquipments'),
      }[catId];
    },
    onEquipmentChange(event) {
      const equipmentId = event.target.value;
      const isChecked = event.target.checked;
      const oldArray = this.formData.equipments;

      if (isChecked) {
        oldArray.push(equipmentId);
        this.$store.dispatch('form/changeCreateAnnounceField', oldArray);
      } else {
        const elementIndex = oldArray.findIndex(el => el === equipmentId);
        if (elementIndex > -1) {
          oldArray.splice(elementIndex, 1);
          this.$store.dispatch('form/changeCreateAnnounceField', oldArray);
        }
      }
    }
  },
};
</script>

<style scoped>
.checkbox {
  display: flex;
  width: 50%;
  box-sizing: border-box;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.checkbox:hover {
  background-color: #f6f9fc;
}

.checkbox input {
  align-self: flex-start;
  margin: 2px 0;
  cursor: pointer;
}
.checkbox label {
  text-align: left;
  font-size: 14px;
  padding-left: 10px;
  cursor: pointer;
  align-self: flex-start;
  width: 100%;
  height: 100%;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
}

.checkboxes-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.title {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e7ea;
  font-size: 16px;
}

</style>
