<template>
  <div class="current-chat-view">
    <div class="conversation">

    </div>
    <form class="form">
      <input  type="text" v-model="message" placeholder="Type your message" class="input">
      <button @click="sendMessage" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message:''
      };
    },
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
    methods: {
      sendMessage(event) {
        event.preventDefault();
        this.$store.dispatch('conversation/create', {
          announceId:4},{text: this.message}
        );
      }
    }
  };
</script>

<style scoped>
.current-chat-view {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
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
</style>
