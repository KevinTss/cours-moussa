<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-container>
      <el-col :span="10">
        <el-form-item label="particular price ttc:">
          <el-input
            placeholder="price all taxes included"
            style="width: 100%"
            name="brutPrice"
            v-model="form.price_brut"
            @input="(newValue) => {
              onPriceBrutChange(newValue)
              onChange(newValue, 'priceBrut')
            }"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="10" :offset="4">
        <el-form-item label="particular price netto:">
          <el-input
            v-model="form.price_net"
            placeholder="net price"
            style="width: 100%"
            @input="onPriceNetChange"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-container>
      <el-col :span="8">
        <el-form-item label="vat deduction">
          <el-switch v-model="form.vat" @change="onSwitch"/>
        </el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="8">
        <el-form-item label="vat rate:">
          <el-input
            disabled
            v-model="vatRate"
            placeholder="net price"
            style="width: 100%"
          >
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="8">
        <el-form-item label="vat amount:">
          <el-input :disabled="true" style="width: 100%"
            v-model="form.amount_tax"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-col :span="24">
      <el-form-item label="Title">
        <el-input
          maxlength="65"
          :show-word-limit="true"
          v-model="formData.title"
          placeholder="price all taxes included"
          style="width: 100%"
          @input="(newValue) => onChange(newValue, 'title')"
        />
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="Description">
        <el-input 
          :rows="8" 
          type="textarea" 
          v-model="formData.description"
          @input="(newValue) => onChange(newValue, 'description')"
        />
      </el-form-item>
    </el-col>
    <el-col>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{
          isCreateLoading ? "loading..." : "Créer"
        }}</el-button>
        <el-button @click="() => this.$emit('changeStep', 2)"
          >Previous step</el-button
        >
        <el-button @click="showAlertBeforeCancel">Anuuler</el-button>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
  import AuthMixin from '../../mixins/auth';

  export default {
  mixins: [AuthMixin],
  data() {
    return {
      form: {
        price_net: '',
        price_brut: '',
        amount_tax:'',
        vat: false,
        type: [],
      },
    };
  },
  computed: {
    vatRate() {
      return this.authUser.country.vat_rate;
    },
    formData() {
      return this.$store.getters['form/getCreateAnnounceFromData'];
    },
    isCreateLoading() {
      return this.$store.getters['announce/isCreateLoading'];
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('announce/create');
    },
    showAlertBeforeCancel() {
      console.log('cancel');
    },
    onPriceBrutChange(a) {
      // if (this.vat) {
        const vat = Number(this.vatRate);
        this.form.price_net = (a / Number('1.' + vat)).toFixed(2);
        this.form.amount_tax = (a - this.form.price_net).toFixed(2);
      // }
    },
    onPriceNetChange(a) {
      const vat = Number(this.vatRate);
      this.form.price_brut = (a * Number('1.' + vat)).toFixed(2);
      this.form.amount_tax = (this.form.price_brut - a).toFixed(2);
      this.onChange(this.form.price_brut, 'priceBrut');
    },
    onChange(newValue, fieldName) {
      this.$store.dispatch('form/changeCreateAnnounceField', {
        name: fieldName,
        value: newValue,
      });
    },
    onSwitch(val) {
      this.onChange(val ? this.vatRate : null, 'vat');
    }
  },
  watch: {
    isCreateLoading(nv) {
      if (!nv) {
        // si false -> call temriné
        const hasError = this.$store.getters['announce/isCreateError'];
        if (hasError) {
          this.$message({
            message: hasError,
            type: 'error',
          });
        }
      }
    },
  },
};
</script>
