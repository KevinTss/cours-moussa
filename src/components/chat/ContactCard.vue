<template>
  <div class="contact-card">
    <div>{{ name }}</div>
    <div>{{ lastMessage }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      lastMessage: {
        type: String,
        default: ''
      },
    },
  };
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}

</style>
