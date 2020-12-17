<template>
  <div>
    <router-link to="/about">Go to about</router-link>
     <Button label="Home"/>
    <Button label="About"/>
    <Button label="Policy"/>
    page home
  </div>
</template>

<script>
import Button from './Button'

export default {
  components: {
    Button
  }
}
</script>
