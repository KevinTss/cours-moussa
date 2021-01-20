<template>
    <el-form>
        <el-row :gutter="20">
            <el-col :span="6">

              <select-input
                        label="Brand"
                        :value="formData.brandId"
                        @change="(nV) => brandSelected(nV)"
                        placeholder="Select Brand"
                        filterable
                        :options="brands"
                />
            </el-col>

            <el-col :span="6">
                <select-input
                        label="Model"
                        :value="modelId"
                        placeholder="Select model"
                        :options="models"
                        labelOption="model_name"
                />
            </el-col>
            <el-col :span="4">
                <el-form-item  label="Year">
                    <el-select
                        :value="yearSelect"
                        @change="(nV) => yearSelected(nV)"
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

        </el-row>
    </el-form>
</template>

<script>
    import SelectInput from './SelectInput';
    import BrandMixin from '../../mixins/brand';
    import ModelMixin from '../../mixins/model';

    export default {
        mixins: [SelectInput, BrandMixin,ModelMixin],
        components:{
            SelectInput
        },
        data(){
           return  {
               years: [],
               yearSelect:'',
           };
        },
        computed: {
            formData() {
                return this.$store.getters['form/getAnnounceFromSearchData'];
            },
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
            brand() {
                console.log('eee',this.$store.getters['brand/getAllBrands'] );
                return this.$store.getters['brand/getAllBrands'];
            },
        },
        methods:{
            getYears() {
                const yearsRange = [];
                for (let number = new Date().getFullYear(); number >= 1960; number--) {
                    yearsRange.push(number);
                }
                return yearsRange;
            },
            yearSelected(nV){
                return this.yearSelect = nV;
            },
            brandSelected(nv){
                this.$store.dispatch('form/changeSearchQuickAnnounce', {
                    name: 'brandId',
                    value: nv
                });
            },
        },
        created() {
            this.years = this.getYears();
            this.$store.dispatch('model/fetchModels');
            this.$store.dispatch('brand/fetchBrands');
        }
    };
</script>
