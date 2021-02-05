<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-container>
      <el-col :span="10">
        <el-form-item label="particular price ttc:">
          <el-input
            placeholder="price all taxes included"
            style="width: 100%"
            name="brutPrice"
            :value="form.price_brut"
            @change="onPriceBrutChange"
          ></el-input>
        </el-form-item>
      </el-col>
      <!-- <el-col :span="2">
        <el-form-item></el-form-item>
      </el-col> -->
      <el-col :span="10" :offset="4">
        <el-form-item label="particular price netto:">
          <el-input
            v-model="form.price_net"
            placeholder="net price"
            style="width: 100%"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-container>
      <el-col :span="8">
        <el-form-item label="vat deduction">
          <el-switch v-model="form.vat"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="8">
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
      <el-col :span="8">
        <el-form-item label="vat amount:">
          <el-input :disabled="true" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-col :span="24">
      <el-form-item label="Title">
        <el-input
          maxlength="65"
          :show-word-limit="true"
          v-model="form.title"
          placeholder="price all taxes included"
          style="width: 100%"
        ></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="Description">
        <el-input :rows="8" type="textarea" v-model="form.desc"></el-input>
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
        vat: false,
        type: [],
        title: '',
        desc: '',
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
      this.$store.dispatch('announce/create', this.formData);
    },
    showAlertBeforeCancel() {
      console.log('cancel');
    },
    onPriceBrutChange(a) {
      console.log('a', a);
      // const vat = Number(this.vatRate);
      // console.log('vat', vat);
      // const netPrice = Math.round(Number(nv) + (Number(nv) / 100) * vat);
      // console.log('netPrice', netPrice);
      // this.form.price_net = netPrice;
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
    // 'form.price_brut'(nv) {
    //   const vat = Number(this.vatRate);
    //   console.log('vat', vat);
    //   const netPrice = Math.round(Number(nv) + (Number(nv) / 100) * vat);
    //   console.log('netPrice', netPrice);
    //   this.form.price_net = netPrice;
    // },
    'form.price_net'(nv) {
      const vat = Number(this.vatRate);
      const brutPrice = Number(nv) - (Number(nv) / 100) * vat;
      this.form.price_brut = brutPrice;
    }
  },
};
</script>
