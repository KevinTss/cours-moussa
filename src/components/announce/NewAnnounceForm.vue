<template>
  <el-form ref="form-create-announce" @submit="onFormSubmit" label-position="top">
    <form-step/>
    <el-row>
      <el-col :span="8">
        <select-input 
          label="Brand"
          :value="formData.brandId"
          @change="(newValue) => onSelectChange(newValue, 'brandId')"
          placeholder="Select Brand"
          filterable
          :options="brands"
        />
      </el-col>
      <el-col :span="4">
        <el-form-item v-if="formData.brandId" label="Month">
          <el-select
                  :value="formData.month"
                  @change="(newValue) => onSelectChange(newValue, 'month')"
                  placeholder="Select month"
          >
            <el-option v-for="month in months" :key="month" :label="month" :value="month"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item v-if="formData.brandId" label="Year">
          <el-select 
            :value="formData.year" 
            @change="(newValue) => onSelectChange(newValue, 'year')" 
            placeholder="Select year"
          >
            <el-option
              v-for="year in years"
              :key="year"
              :label="year"
              :value="year">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item v-if="formData.month && formData.year" label="Fuel">
          <el-select
                  :value="formData.fuel"
                  @change="(newValue) => onSelectChange(newValue, 'fuel')"
                  placeholder="Select fuel"
          >
            <el-option
                    v-for="fuel in fuels"
                    :key="fuel"
                    :label="fuel"
                    :value="fuel">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
          <select-input 
          v-if="formData.fuel" label="Model"
            :value="formData.modelId"
            @change="(newValue) => onSelectChange(newValue, 'modelId')"
            placeholder="Select model"
            :options="models"
            labelOption="model_name"
          />
      </el-col>
      <el-col :span="8">
        <el-form-item v-if="formData.modelId" label="Kw">
          <el-select
            :value="formData.kw"
            @change="(newValue) => onSelectChange(newValue, 'kw')"
            placeholder="Select kw"
          >
            <el-option
              v-for="kw in kws"
              :key="kw"
              :label="kw"
              :value="kw">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item v-if="formData.kw" label="Transmission">
          <el-select
            :value="formData.transmission"
            @change="(newValue) => onSelectChange(newValue, 'transmission')"
            placeholder="Select transmission"
          >
            <el-option
              v-for="gearbox in gearboxes"
              :key="gearbox"
              :label="gearbox"
              :value="gearbox">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
          <select-input 
          v-if="formData.transmission" label="Serial"
            :value="formData.serialId"
            @change="(newValue) => onSelectChange(newValue, 'serialId')"
            placeholder="Select seriam"
            :options="serials"
            labelOption="verion_name"
          />
      </el-col>
      <el-col :span="8">
        <el-form-item v-if="isOtherInputVisble" label="Other">
          <el-input
                  v-model="formData.other"
                  @change="(newValue) => onSelectChange(newValue, 'other')"
                  placeholder="Other"
          />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item v-if="(formData.serialId!=='other' && formData.serialId!==null) || formData.other" label="Body">
          <el-select
            :value="formData.body"
            @change="(newValue) => onSelectChange(newValue, 'body')"
            placeholder="Select body"
          >
            <el-option
              v-for="body in bodies"
              :key="body"
              :label="body"
              :value="body"
            />
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-button type="submit" :disabled="!formData.body" @click="goToStep2" >Next Step</el-button>
    <el-button @click="reset">Reset</el-button>
  </el-form>
</template>

<script>
import BrandMixin from '../../mixins/brand';
import ModelMixin from '../../mixins/model';
import SerialMixin from '../../mixins/serial';
import FormStep from './stepForm';
import SelectInput from './SelectInput';

export default {
  mixins: [ModelMixin,SerialMixin,BrandMixin],
  components: {
    FormStep,
    SelectInput
  },
  data() {
    return {
      step: 0,
      years: [],
      months: [],
      bodies: ["compact","convertible","coupe","off-road","sedan"],
      selectSerial: false,
      other: ''
    };
  },
  computed: {
    fuels() {
      const f = [];

      if (!this.models.length) return f;

      this.models.forEach(model => {
        if (model.version_cars.length) {
          model.version_cars.forEach(version_car => {
            // On inclue que si ce n'est pas déjà présent pour éviter les doublons
            if (!f.includes(version_car.fuel)) {
              f.push(version_car.fuel);
            }

          });
        }
      });

      return f;
    },
    formData() {
      return this.$store.getters['form/getCreateAnnounceFromData'];
    },
    formDataModelId() {
      return this.formData.modelId;
    },
    formDataSerialId() {
      return this.formData.serialId;
    },
    kws() {
      const arr = this.$store.getters['serial/getAllSerials'].map(el => el.power_cv);
      const uniqArr = [];
      arr.forEach(el => {
        if (!uniqArr.includes(el)) {
          uniqArr.push(el);
        }
      });
      return uniqArr;
    },

      //TODO: refactorer function map unique
    gearboxes() {
      const kw = Number(this.formData.kw);
      const serials = this.$store.getters['serial/getAllSerials'];
      const concernedSerials = serials.filter(el => el.power_cv === kw);
      const formatted = concernedSerials.map(el => el.gearbox);
      const uniq = formatted.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
      
      return uniq;
    },
    isOtherInputVisble() {
      return this.formData.serialId === 'other';
    }
  },
  methods: {
    /**
     * getYears
     * 
     * Function who return the range of year for the form
     * 
     * @return {Array} Array of years
     */
    getYears() {
      const yearsRange = [];
      for (let number = new Date().getFullYear(); number >= 1960; number--) {
        yearsRange.push(number);
      }
      return yearsRange;
    },
    getMonth() {
      const monthRange = [];
      for (let number = 1; number <= 12; number++) {
        monthRange.push(number);
      }
      return monthRange;
    },
    onSelectChange(newValue, fieldName) {
      this.$store.dispatch('form/changeCreateAnnounceField', {
        name: fieldName, 
        value: newValue
      });
    },
    onFormSubmit(event) {
      event.preventDefault();

      console.log('SUBMIT', this.formData);
    },
    reset(e) {
      e.preventDefault();
      this.$store.dispatch('form/reset');
    },
    dispatchFetchModels(newValue) {
      if (
        newValue
        // this.formData.year && 
        // this.formData.month && 
        // this.formData.fuel 
      ) {
        this.$store.dispatch('model/fetchModels');
      }
    },
    goToStep2() {
      this.$router.push({path: '/announces/new/step2'});
    }
  },
  watch: {

    "formData.month"(nV){ this.dispatchFetchModels(nV); },
    formDataModelId() {
      console.log('formDataModelId');
      this.$store.dispatch('serial/fetchSerials');
    },
    formDataSerialId() {
      this.$store.dispatch('serial/fetchSerials');
    },
      "formData.kw"(){
          this.$store.dispatch('form/reset', [
              "transmission",
              "serialId",
              "body",
          ]);
      },
      "formData.transmission"(){
          this.$store.dispatch('form/reset', [
              "serialId",
              "body",
          ]);
      },

    "formData.brandId"(nV) {
      console.log('oo');
      this.dispatchFetchModels(nV);
      this.$store.dispatch('form/reset', [
        "year",
        "month",
        "fuel",
        "modelId",
        "kw",
        "transmission",
        "serialId",
        "body",
      ]);
    },
      "formData.year"(nV){
        this.dispatchFetchModels(nV);
          this.$store.dispatch('form/reset', [
              "fuel",
              "modelId",
              "kw",
              "transmission",
              "serialId",
              "body",
          ]);
      },
    "formData.modelId"() {
      this.$store.dispatch('form/reset', [
        "kw",
        "transmission",
        "serialId",
          "other",
        "body",
      ]);
    },
      "formData.fuel"(nV){
        this.dispatchFetchModels(nV) ,
        this.$store.dispatch('form/reset', [
            "modelId",
            "kw",
            "transmission",
            "serialId",
            "body",
        ]);
      }
      ,
    "formData.serialId"() {
        this.$store.dispatch('form/reset', [
            "other",
            "body",
        ]);
    },
    isModelsFetching(newValue, oldValue) {
      // console.log('isModelsFetching new', newValue)
      // console.log('isModelsFetching old', oldValue)
      // reset quand fini the fetcher
      if (newValue === false && oldValue === true) {
        //this.$store.dispatch('form/reset',"ddd")
      }
    }
  },
  created() {
    this.years = this.getYears();
    this.months = this.getMonth();
  }
};
</script>

<style>
.el-select {
  width: 100%;
}
</style>
