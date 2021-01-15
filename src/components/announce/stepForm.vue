<template>
  <el-steps :active="currentStep" finish-status="success" simple>
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
        default: 1
      },
    },
  };
</script>
