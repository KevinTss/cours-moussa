<template>
  <div class="contact-list">
    <div v-if="isFetchConversationsLoaded && conversations.length < 1">
      no conversations...
    </div>
    <template v-else>
      <contact-card 
        v-for="(conversation, index) in conversations"
        :key="index"
        :conversation="conversation"
        @click="selectConversation"
      />
    </template>
  </div>
</template>

<script>
  import ContactCard from './ContactCard';

  export default {
    computed: {
      conversations() {
        return this.$store.getters['conversation/getAll']; 
      },
      isFetchConversationsLoaded() {
        return this.$store.getters['conversation/isGetAllSuccess'];
      },
      isFetchConversationsError() {
        return this.$store.getters['conversation/isGetAllError'];
      }
    },
    components: {
      ContactCard,
    },
    methods: {
      selectConversation(conversationId) {
        console.log('conv', conversationId);
      }
    }
  };
</script>

<style scoped>
.contact-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
