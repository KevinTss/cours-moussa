<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-4">
          <label for="brand">Brand</label>
          <select id="brand" class="form-control" @change="onBrandChange">
              <option  v-for="brand in $store.getters['brand/getAllBrands']" :key="brand.id" :value="brand.id">{{brand.name}}</option>
          </select>
      </div>

      <template v-if="models.length">
        <div class="form-group col-md-2">
            <label for="month">Month</label>
            <select id="month" class="form-control">
                <option selected>Choose...</option>
                <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
            </select>
        </div>

        <div class="form-group col-md-2">
            <label for="year">Year</label>
            <select id="year" class="form-control">
              <option selected>Choose...</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>

        <div class="form-group col-md-4">
            <label for="fuel">Fuel</label>
            <select id="fuel" class="form-control">
                <option selected>Choose...</option>
                <option v-for="fuel in fuels" :key="fuel" :value="fuel">{{ fuel }}</option>
            </select>
        </div>
      </template>

  </div>

  <div v-if="models.length" class="form-row">
      <div class="form-group col-md-4">
          <label for="model">Model</label>
          <select id="model" class="form-control">
              <option selected>Choose...</option>
              <option  v-for="model in models" :key="model.id" :value="model.id">{{model.model_name}}</option>
          </select>
      </div>
      <div class="form-group col-md-4">
          <label for="kw">Kw</label>
          <select id="kw" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
      <div class="form-group col-md-4">
          <label for="transmission">Transmission</label>
          <select id="transmission" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
          </select>
      </div>
  </div>

  <div v-if="models.length" class="form-row">
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
      years: [],
      months: [],
      fuels: ["Diesel", "Gasoline", "Electric"]
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
    onBrandChange(event) {
      const brandId = event.target.value
      this.$store.dispatch('model/fetchModels', brandId)
    }
  },
  created() {
    this.years = this.getYears()
    this.months = this.getMonth()
  }
}
</script>
