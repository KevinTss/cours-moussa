<template>
  <el-steps class="step-menu" :active="currentStep" finish-status="success" simple>
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
</template>

<script>
  export default {
    props: {
      currentStep: {
        type: Number,
        default: 0
      },
    },
  };
</script>
<style>
  .step-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }
</style>
