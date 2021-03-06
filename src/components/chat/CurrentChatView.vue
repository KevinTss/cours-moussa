<template>
  <div class="current-chat-view">

    <div class="empty-state" v-if="!getCurrentConversation">
      no conversation selected
    </div>
    
    <template v-else>
      <div class="conversation">

      </div>
      <form class="form">
        <input  type="text" v-model="message" placeholder="Type your message" class="input">
        <button @click="sendMessage" type="submit">Envoyer</button>
      </form>
    </template>
  </div>
</template>

<script>
import ConversationMixin from '../../mixins/conversation';

  export default {
    mixins: [ConversationMixin],//getActiveChat
    methods: {
      sendMessage(event) {
        event.preventDefault();
        // this.$store.dispatch('conversation/create', {
        //   announceId:4},{text: this.message}
        // );
      }
    }
  };
</script>

<style scoped>
.current-chat-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.conversation {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.form {
  display: flex;
  width: 100%;
  height: 80px;
  border: 1px solid black;
}
.input {
  flex-grow: 1;
}
.empty-state {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
