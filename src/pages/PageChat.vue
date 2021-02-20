<template>
  <div class="container-chat">
    <nav-menu />
    <div class="chat-area">

      <the-spinner v-if="isConversationsFetching"/>

      <template v-else>
        <aside class="contact-list">
          <contacts-list/>
        </aside>
        <main class="current-chat">
          <current-chat-view name="John"/>
        </main>
      </template>
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import ContactsList from '../components/chat/ContactList';
import CurrentChatView from '../components/chat/CurrentChatView';
import {TheSpinner} from '../components/ui';

export default {
  components: {
    NavMenu,
    ContactsList,
    CurrentChatView,
    TheSpinner
  },
  computed: {
    isConversationsFetching() {
      return this.$store.getters['conversation/isGetAllLoading']; 
    },
    hasConversationsError() {
      return this.$store.getters['conversation/isGetAllError']; 
    }
  },
  watch: {
    isConversationsFetching(nV, oV) {
      if (oV && !nV && this.hasConversationsError) {
        this.$message({
          message: this.hasConversationsError,
          type: 'error',
          showClose: true,
          duration: 0
        });
      }
    }
  },
  created() {
    this.$store.dispatch('conversation/fetchAll');
  }
};
</script>

<style scoped>
.container-chat {
  display: flex;
  flex-direction: column;
   width: 100%;
}
.chat-area {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.contact-list {
  display: flex;
  width: 350px;
  height: 100%;
  border-right: 1px solid grey;
}
.current-chat {
  display: flex;
  flex-grow: 1;
  height: 100%;
}
</style>
