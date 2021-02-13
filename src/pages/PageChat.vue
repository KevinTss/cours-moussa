<template>
  <div class="container-chat">
    <nav-menu />
    <div class="chat-area">
      <aside class="contact-list">
        <contacts-list/>
      </aside>
      <main class="current-chat">
        <current-chat-view/>
      </main>
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/layouts/NavMenu';
import ContactsList from '../components/chat/ContactList';
import CurrentChatView from '../components/chat/CurrentChatView';

export default {
  components: {
    NavMenu,
    ContactsList,
    CurrentChatView
  },
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
}
.contact-list {
  display: flex;
  width: 350px;
  border-right: 1px solid grey;
}
.current-chat {
  display: flex;
  flex-grow: 1;
}
</style>
