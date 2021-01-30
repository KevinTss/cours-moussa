<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-container>
      <el-col :span="11">
        <el-form-item label="particular price ttc:">
          <el-input
            v-model="form.particular_price_net"
            placeholder="price all taxes included"
            style="width: 100%"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item></el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="10">
        <el-form-item label="particular price netto:">
          <el-input
            v-model="form.particular_price_brut"
            placeholder="net price"
            style="width: 100%"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-container>
      <el-col :span="4">
        <el-form-item label="vat deduction">
          <el-switch v-model="form.vat"></el-switch>
        </el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="7">
        <el-form-item label="vat rate:">
          <el-input
            :disabled="true"
            v-model="form.vat_rate"
            placeholder="net price"
            style="width: 100%"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item></el-form-item>
      </el-col>
      <el-col v-if="form.vat" :span="10">
        <el-form-item label="vat amount:">
          <el-input :disabled="true" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
    </el-container>
    <el-col :span="11">
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
    <el-col :span="23">
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
export default {
  data() {
    return {
      form: {
        particular_price_net: '',
        particular_price_brut: '',
        vat_rate: '21',
        vat: false,
        type: [],
        title: '',
        desc: '',
      },
    };
  },
  computed: {
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
