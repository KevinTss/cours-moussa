<template>
  <form @submit="onFormSubmit">
    <span style="color: red; font-weight: bold;">isModelsFetching: {{ isModelsFetching }}</span>
    <div class="form-row">
      <div class="form-group col-md-4">
          <label for="brand">Brand</label>
          <el-select 
            :value="formData.brandId" 
            @change="(newValue) => onSelectChange2(newValue, 'brandId')" 
            placeholder="Select Brand"
            filterable
          >
            <el-option
              v-for="brand in brands"
              :key="brand.id"
              :label="brand.name"
              :value="brand.id">
            </el-option>
          </el-select>
      </div>

      <template v-if="formData.brandId">
        <div class="form-group col-md-2">
            <label for="month">Month</label>
            <select id="month" name="month" class="form-control" @change="(event) => onSelectChange(event, null)">
                <option :selected="formData.month === null" :value="null">Choose...</option>
                <option v-for="month in months" 
                :key="month" 
                :value="month"
                :selected="formData.month === month"
                >{{ month }}</option>
            </select>
        </div>

        <div class="form-group col-md-2">
            <label for="year">Year</label>
            <select id="year" class="form-control" name="year" @change="(event) => onSelectChange(event, null)">
                <option :selected="formData.year === null" :value="null">Choose...</option>
              <option v-for="year in years" :key="year" :value="year" :selected="formData.year === year">{{ year }}</option>
            </select>
        </div>
      </template>

      <div v-if="formData.month && formData.year" class="form-group col-md-4">
          <label for="fuel">Fuel</label>
          <select id="fuel" class="form-control" name="fuel" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.fuel === null" :value="null">Choose...</option>
              <option v-for="fuel in fuels" :key="fuel" :value="fuel" :selected="formData.fuel === fuel">{{ fuel }}</option>
          </select>
      </div>

  </div>

  <div v-if="formData.fuel" class="form-row">
      <div class="form-group col-md-4">
          <label for="model">Model</label>
          <select id="model" class="form-control" name="modelId" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.model === null" :value="null">Choose...</option>
              <option  v-for="model in models" :key="model.id" :value="model.id" :selected="formData.model === model">{{model.model_name}}</option>
          </select>
      </div>
      <div v-if="formData.modelId" class="form-group col-md-4" >
          <label for="kw">Kw</label>
          <select id="kw" class="form-control" name="kw" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.kw === null" :value="null">Choose...</option>
              <option  v-for="kw in kws" :key="kw" :value="kw" :selected="formData.kw === kw">{{kw}}</option>
          </select>
      </div>
      <div v-if="formData.kw" class="form-group col-md-4">
          <label for="transmission">Transmission</label>
          <select id="transmission" class="form-control" name="transmission" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.transmission === null" :value="null">Choose...</option>
              <option  v-for="gearbox in gearboxes" :key="gearbox" :value="gearbox">{{gearbox}}</option>
          </select>
      </div>
  </div>

  <div v-if="formData.transmission" class="form-row">
      <div class="form-group col-md-4">
          <label for="serial">Sérial</label>
          <select id="serial" class="form-control" name="serialId" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.serialId === null" :value="null">Choose...</option>
              <option  v-for="serial in serials" :key="serial.id" :value="serial.id">{{serial.version_name}}</option>
              <option value="other">other</option>
          </select>
      </div>
      <div v-if="isOtherInputVisble" class="form-group col-md-4">
          <label for="other">Other</label>
          <input type="text" class="form-control" id="other" placeholder="Other" >
      </div>
      <div class="form-group col-md-4">
          <label for="body">Body</label>
          <select id="body" class="form-control" name="body" @change="(event) => onSelectChange(event, null)">
              <option :selected="formData.body === null" :value="null">Choose...</option>
              <option v-for="body in bodies" :key="body" :value="body">{{body}}</option>
          </select>
      </div>
  </div>

  <el-button type="submit" v-if="formData.body" >Next Step</el-button>
  <el-button @click="reset">Reset</el-button>
  
  </form>
</template>

<script>
import BrandMixin from '../../mixins/brand'
import ModelMixin from '../../mixins/model'
import SerialMixin from '../../mixins/serial'

export default {
  mixins: [ModelMixin,SerialMixin,BrandMixin],
  data() {
    return {
      step: 0,
      years: [],
      months: [],
      bodies: ["compact","convertible","coupe","off-road","sedan"],
      selectSerial: false,
    }
  },
  computed: {
    fuels() {
      const f = []

      if (!this.models.length) return f

      this.models.forEach(model => {
        if (model.version_cars.length) {
          model.version_cars.forEach(version_car => {
            // On inclue que si ce n'est pas déjà présent pour éviter les doublons
            if (!f.includes(version_car.fuel)) {
              f.push(version_car.fuel)
            }

          })
        }
      })

      return f
    },
    formData() {
      return this.$store.getters['form/getCreateAnnounceFromData']
    },
    formDataModelId() {
      return this.formData.modelId
    },
    formDataSerialId() {
      return this.formData.serialId
    },
    kws() {
      const arr = this.$store.getters['serial/getAllSerials'].map(el => el.power_cv)
      const uniqArr = []
      arr.forEach(el => {
        if (!uniqArr.includes(el)) {
          uniqArr.push(el)
        }
      })
      return uniqArr
    },

      //TODO: refactorer function map unique
    gearboxes() {
      const kw = Number(this.formData.kw)
      const serials = this.$store.getters['serial/getAllSerials']
      const concernedSerials = serials.filter(el => el.power_cv === kw)
      const formatted = concernedSerials.map(el => el.gearbox)
      const uniq = formatted.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
      
      return uniq
    },
    isOtherInputVisble() {
      return this.formData.serialId === 'other'
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
      const yearsRange = []
      for (let number = new Date().getFullYear(); number >= 1960; number--) {
        yearsRange.push(number)
      }
      return yearsRange
    },
    getMonth() {
      const monthRange = []
      for (let number = 1; number <= 12; number++) {
        monthRange.push(number)
      }
      return monthRange
    },
    onSelectChange(event) {
      this.$store.dispatch('form/changeCreateAnnounceField', {
        name: event.target.name, 
        value: event.target.value
      })
    },
    onSelectChange2(newValue, fieldName) {
      this.$store.dispatch('form/changeCreateAnnounceField', {
        name: fieldName, 
        value: newValue
      })
    },
    onFormSubmit(event) {
      event.preventDefault()

      console.log('SUBMIT', this.formData)
    },
    reset(e) {
      e.preventDefault()
      this.$store.dispatch('form/reset')
    },
    dispatchFetchModels(newValue) {
      if (
        newValue
        // this.formData.year && 
        // this.formData.month && 
        // this.formData.fuel 
      ) {
        this.$store.dispatch('model/fetchModels')
      }
    }
  },
  watch: {

    "formData.month"(nV){ this.dispatchFetchModels(nV) },
    formDataModelId() {
      console.log('formDataModelId')
      this.$store.dispatch('serial/fetchSerials')
    },
    formDataSerialId() {
      this.$store.dispatch('serial/fetchSerials')
    },
      "formData.kw"(){
          this.$store.dispatch('form/reset', [
              "transmission",
              "serialId",
              "body",
          ])
      },
      "formData.transmission"(){
          this.$store.dispatch('form/reset', [
              "serialId",
              "body",
          ])
      },

    "formData.brandId"(nV) {
      console.log('oo')
      this.dispatchFetchModels(nV)
      this.$store.dispatch('form/reset', [
        "year",
        "month",
        "fuel",
        "modelId",
        "kw",
        "transmission",
        "serialId",
        "body",
      ])
    },
      "formData.year"(nV){
        this.dispatchFetchModels(nV)
          this.$store.dispatch('form/reset', [
              "fuel",
              "modelId",
              "kw",
              "transmission",
              "serialId",
              "body",
          ])
      },
    "formData.modelId"() {
      this.$store.dispatch('form/reset', [
        "kw",
        "transmission",
        "serialId",
          "other",
        "body",
      ])
    },
      "formData.fuel"(nV){
        this.dispatchFetchModels(nV) ,
        this.$store.dispatch('form/reset', [
            "modelId",
            "kw",
            "transmission",
            "serialId",
            "body",
        ])
      }
      ,
    "formData.SerialId"() {
        this.$store.dispatch('form/reset', [
            "other",
            "body",
        ])
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
    this.years = this.getYears()
    this.months = this.getMonth()
  }
}
</script>
