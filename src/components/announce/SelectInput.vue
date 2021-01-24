<template>
  <el-form-item :label="label">
    <el-select
      :value="value"
      @change="onChange"
      :placeholder="placeholder"
      :filterable="filterable"
    >
      <el-option
        v-for="(option, index) in options"
        :key="index"
        :label="typeof option === 'object' ? option[labelOption] : option"
        :value="typeof option === 'object' ? option.id : option"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelOption: {
      type: String,
      default: "name",
    },
  },
  methods: {
    onChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style>
.el-form-item__label {
  width: 100%;
}
</style>
