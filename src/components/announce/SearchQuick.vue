<template>
  <el-form>
    <el-row :gutter="20">
      <el-col :span="6">
        <select-input
          label="Brand"
          :value="formData.brandId"
          @change="(nV) => fieldSelected(nV, 'brandId')"
          placeholder="Select Brand"
          filterable
          :options="brands"
        />
      </el-col>

      <el-col :span="6">
        <select-input
          label="Model"
          :value="formData.modelId"
          @change="(nV) => fieldSelected(nV, 'modelId')"
          placeholder="Select model"
          :options="models"
          labelOption="model_name"
        />
      </el-col>

      <el-col :span="4">
        <el-form-item label="Year">
          <el-select
            :value="formData.year"
            @change="(nV) => fieldSelected(nV, 'year')"
            placeholder="Select year"
          >
            <el-option
              v-for="year in years"
              :key="year"
              :label="year"
              :value="year"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="2">
        <el-button @click="search">Search</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import SelectInput from "./SelectInput";
import BrandMixin from "../../mixins/brand";
import ModelMixin from "../../mixins/model";

export default {
  mixins: [SelectInput, BrandMixin, ModelMixin],
  components: {
    SelectInput,
  },
  data() {
    return {
      years: [],
      yearSelect: "",
    };
  },
  computed: {
    formData() {
      return this.$store.getters["form/getAnnounceFromSearchData"];
    },
    fuels() {
      const f = [];

      if (!this.models.length) return f;

      this.models.forEach((model) => {
        if (model.version_cars.length) {
          model.version_cars.forEach((version_car) => {
            // On inclue que si ce n'est pas déjà présent pour éviter les doublons
            if (!f.includes(version_car.fuel)) {
              f.push(version_car.fuel);
            }
          });
        }
      });
      return f;
    },
    brand() {
      console.log("eee", this.$store.getters["brand/getAllBrands"]);
      return this.$store.getters["brand/getAllBrands"];
    },
  },
  methods: {
    getYears() {
      const yearsRange = [];
      for (let number = new Date().getFullYear(); number >= 1960; number--) {
        yearsRange.push(number);
      }
      return yearsRange;
    },
    yearSelected(nV) {
      return (this.yearSelect = nV);
    },
    fieldSelected(nv, name) {
      this.$store.dispatch("form/changeSearchQuickAnnounce", {
        name: name,
        value: nv,
      });
    },
    search() {
      this.$store.dispatch("announce/search", this.formData);
    },
  },
  watch: {
    "formData.brandId"(nv) {
      if (nv) {
        this.$store.dispatch("model/fetchModels", { useSearchForm: true });
      }
    },
  },
  created() {
    this.years = this.getYears();
    this.$store.dispatch("brand/fetchBrands");
  },
};
</script>
