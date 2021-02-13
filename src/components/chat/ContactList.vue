<template>
  <div class="contact-list">
    <contact-card 
      v-for="(contact, index) in contacts"
      :key="index"
      :name="contact.name"
      :lastMessage="contact.lastMessage"
    />
  </div>
</template>

<script>
  import ContactCard from './ContactCard';

  export default {
    data() {
      return {
        contacts: [
          {
            name: 'John Doe',
            lastMessage: 'Hello, I want a car, an AUDI!'
          },
          {
            name: 'Jane Doe',
            lastMessage: 'Hello, I want a car, an AUDI!'
          }
        ]
      };
    },
    components: {
      ContactCard,
    },
  };
</script>

<style scoped>
.contact-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%
}
</style>
