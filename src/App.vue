<template>
  <AppNavbar />

  <router-view />

  <ChatBot />
  <AppFooter />
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import ChatBot from './components/ChatBot.vue'

export default {
  components: {
    AppNavbar,
    AppFooter,
    ChatBot
  }
}
</script>
