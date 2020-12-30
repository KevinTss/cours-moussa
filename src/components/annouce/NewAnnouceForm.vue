<template>
  <form @submit="onFormSubmit">
    <div class="form-row">
      <div class="form-group col-md-4">
          <label for="brand">Brand</label>
          <!-- eslint-disable-next-line vue/valid-v-on -->
          <select 
            id="brand" 
            class="form-control" 
            name="brandId"
            @change="onSelectChange"
          >
            <option selected>Choose...</option>
            <option  v-for="brand in $store.getters['brand/getAllBrands']" :key="brand.id" :value="brand.id">{{brand.name}}</option>
          </select>
      </div>

      <template v-if="formData.brandId">
        <div class="form-group col-md-2">
            <label for="month">Month</label>
            <select id="month" name="month" class="form-control" @change="(event) => onSelectChange(event, null)">
                <option selected>Choose...</option>
                <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
            </select>
        </div>

        <div class="form-group col-md-2">
            <label for="year">Year</label>
            <select id="year" class="form-control" name="year" @change="(event) => onSelectChange(event, null)">
              <option selected>Choose...</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
      </template>

      <div v-if="step > 1" class="form-group col-md-4">
          <label for="fuel">Fuel</label>
          <select id="fuel" class="form-control" name="fuel" @change="(event) => onSelectChange(event, null)">
              <option selected>Choose...</option>
              <option v-for="fuel in fuels" :key="fuel" :value="fuel">{{ fuel }}</option>
          </select>
      </div>

  </div>

  <div v-if="step > 1" class="form-row">
      <div class="form-group col-md-4">
          <label for="model">Model</label>
          <select id="model" class="form-control" name="modelId" @change="(event) => onSelectChange(event, null)">
              <option selected>Choose...</option>
              <option  v-for="model in models" :key="model.id" :value="model.id">{{model.model_name}}</option>
          </select>
      </div>
      <div v-if="step > 1" class="form-group col-md-4" >
          <label for="kw">Kw</label>
          <select id="kw" class="form-control" name="kw" @change="(event) => onSelectChange(event, null)">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
      <div v-if="step > 1" class="form-group col-md-4">
          <label for="transmission">Transmission</label>
          <select id="transmission" class="form-control" name="transmission" @change="(event) => onSelectChange(event, null)">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
  </div>

  <div v-if="step > 1" class="form-row">
      <div class="form-group col-md-4">
          <label for="serial">Sérial</label>
          <select id="serial" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
      <div class="form-group col-md-4">
          <label for="other">Other</label>
          <input type="text" class="form-control" id="other" placeholder="Other" >
      </div>
      <div class="form-group col-md-4">
          <label for="body">Body</label>
          <select id="body" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
  </div>

  <button type="submit" class="btn btn-primary">Next Step</button>
  
  </form>
</template>

<script>
import ModelMixin from '../../mixins/model'

export default {
  mixins: [ModelMixin],
  data() {
    return {
      step: 0,
      years: [],
      months: [],
      fuels: ["Diesel", "Gasoline", "Electric"],
      // formData: {
      //  brandId: null
      // },
    }
  },
  computed: {
    formData() {
      return this.$store.getters['form/getCreateAnnounceFromData']
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
      for (let number = 2000; number <= 2021; number++) {
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
    onFormSubmit(event) {
      event.preventDefault()

      console.log('SUBMIT', this.formData)
    }
  },
  watch: {
    "$store.state.form.createAnnounce.brandId"(newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
      // reset: fuel, kw
    }
  },
  created() {
    this.years = this.getYears()
    this.months = this.getMonth()
  }
}
</script>
