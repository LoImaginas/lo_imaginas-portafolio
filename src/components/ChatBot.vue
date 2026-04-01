<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'

const avatarUrl = new URL('../assets/img/Flotante_trim.png', import.meta.url).href

const isOpen = ref(false)
const isTyping = ref(false)
const inputMessage = ref('')
const chatBodyRef = ref(null)

const messages = ref([
  {
    id: Date.now(),
    sender: 'bot',
    text: 'Hola, soy Lo Bot. Puedo orientarte sobre servicios, proyectos, contacto y herramientas utiles.'
  }
])

const quickOptions = [
  {
    label: 'Servicios',
    response: 'Brindo asesorias en contabilidad basica, RRHH, formalizacion y apoyo digital para PYMES.'
  },
  {
    label: 'Proyectos',
    response: 'Puedes revisar mis proyectos en la seccion Proyectos del portafolio.'
  },
  {
    label: 'Contacto',
    response: 'Puedes escribirme a mllanquinaop@correo.uss.cl o ir a la seccion Contacto.'
  },
  {
    label: 'Herramientas',
    response: 'En Herramientas utiles encontraras calculadora de boletas y enlaces de apoyo.'
  }
]

const keywordRules = [
  {
    keywords: ['servicio', 'asesoria'],
    response: 'Ofrezco apoyo en contabilidad basica, RRHH, formalizacion y acompanamiento para PYMES.'
  },
  {
    keywords: ['precio', 'valor', 'costo'],
    response: 'Los precios dependen del alcance del trabajo. Escribeme y revisamos tu caso.'
  },
  {
    keywords: ['contacto', 'correo', 'email'],
    response: 'Puedes contactarme en mllanquinaop@correo.uss.cl o desde la seccion Contacto.'
  },
  {
    keywords: ['github', 'repositorio'],
    response: 'Puedes revisar mis repositorios en: https://github.com/LoImaginas'
  },
  {
    keywords: ['proyecto'],
    response: 'En la seccion Proyectos veras trabajos publicados y casos reales.'
  },
  {
    keywords: ['herramienta', 'boleta', 'sii'],
    response: 'En la seccion Herramientas utiles tienes recursos practicos para emprendedores.'
  }
]

const defaultResponse =
  'Aun estoy aprendiendo. Por ahora puedo orientarte sobre servicios, proyectos, contacto y herramientas utiles.'

let typingTimer = null

const addMessage = (sender, text) => {
  messages.value.push({
    id: Date.now() + Math.random(),
    sender,
    text
  })
}

const scrollToBottom = () => {
  nextTick(() => {
    if (!chatBodyRef.value) return
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight
  })
}

const getResponse = (userText) => {
  const lower = userText.toLowerCase()
  const foundRule = keywordRules.find((rule) => rule.keywords.some((word) => lower.includes(word)))
  return foundRule ? foundRule.response : defaultResponse
}

const botReply = (text) => {
  isTyping.value = true
  scrollToBottom()

  clearTimeout(typingTimer)
  typingTimer = setTimeout(() => {
    addMessage('bot', text)
    isTyping.value = false
    scrollToBottom()
  }, 900)
}

const handleQuickOption = (option) => {
  addMessage('user', option.label)
  botReply(option.response)
  scrollToBottom()
}

const sendMessage = () => {
  const userText = inputMessage.value.trim()
  if (!userText) return

  addMessage('user', userText)
  inputMessage.value = ''

  botReply(getResponse(userText))
  scrollToBottom()
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) scrollToBottom()
}

onBeforeUnmount(() => {
  clearTimeout(typingTimer)
})
</script>

<template>
  <div class="chatbot-wrap">
    <button
      class="chatbot-avatar"
      :class="{ 'is-docked': isOpen }"
      type="button"
      @click="toggleChat"
      aria-label="Abrir chatbot"
    >
      <img :src="avatarUrl" alt="Abrir chatbot" />
    </button>

    <section v-if="isOpen" class="chatbot-panel" aria-label="Chat Lo Bot">
      <header class="chatbot-header">
        <div>
          <h3>Lo Bot</h3>
          <small>En linea</small>
        </div>
        <button type="button" aria-label="Cerrar chatbot" @click="isOpen = false">X</button>
      </header>

      <div ref="chatBodyRef" class="chatbot-body">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="message-row"
          :class="msg.sender === 'user' ? 'user-row' : 'bot-row'"
        >
          <div class="message-bubble" :class="msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'">
            {{ msg.text }}
          </div>
        </div>

        <div v-if="isTyping" class="message-row bot-row">
          <div class="message-bubble bot-bubble typing">Lo Bot esta escribiendo...</div>
        </div>
      </div>

      <div class="chatbot-quick-actions">
        <button
          v-for="option in quickOptions"
          :key="option.label"
          type="button"
          @click="handleQuickOption(option)"
        >
          {{ option.label }}
        </button>
      </div>

      <form class="chatbot-input-area" @submit.prevent="sendMessage">
        <input v-model="inputMessage" type="text" placeholder="Escribe tu mensaje..." />
        <button type="submit">Enviar</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.chatbot-wrap {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1200;
}

.chatbot-avatar {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 132px;
  height: 132px;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  z-index: 1201;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  box-shadow: none;
  overflow: visible;
  transition: right 0.35s ease, bottom 0.35s ease, transform 0.35s ease;
}

.chatbot-avatar.is-docked {
  right: 14px;
  bottom: calc(150px + 520px - 70px);
  z-index: 1202;
}

.chatbot-avatar img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 0;
  filter: none;
  animation: floatAvatar 3.5s ease-in-out infinite;
  -webkit-mask-image:
    radial-gradient(ellipse 44% 28% at 50% 28%, #000 68%, transparent 100%),
    radial-gradient(ellipse 17% 40% at 50% 78%, #000 62%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%, 100% 100%;
  mask-image:
    radial-gradient(ellipse 44% 28% at 50% 28%, #000 68%, transparent 100%),
    radial-gradient(ellipse 17% 40% at 50% 78%, #000 62%, transparent 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, 100% 100%;
}

.chatbot-avatar.is-docked img {
  animation: none;
}

@keyframes floatAvatar {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

.chatbot-panel {
  position: fixed;
  right: 20px;
  bottom: 150px;
  width: 330px;
  height: 520px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1200;
}

.chatbot-header {
  background: #9b6bb3;
  color: #fff;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header h3 {
  margin: 0;
  font-size: 1rem;
}

.chatbot-header small {
  opacity: 0.9;
}

.chatbot-header button {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.chatbot-body {
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  background: #f8f5fb;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message-row {
  display: flex;
}

.bot-row {
  justify-content: flex-start;
}

.user-row {
  justify-content: flex-end;
}

.message-bubble {
  max-width: 78%;
  padding: 10px 12px;
  border-radius: 16px;
  line-height: 1.4;
  font-size: 0.92rem;
}

.bot-bubble {
  background: #eadcf3;
  color: #2f2236;
  border-bottom-left-radius: 6px;
}

.user-bubble {
  background: #b57edc;
  color: #fff;
  border-bottom-right-radius: 6px;
}

.typing {
  font-style: italic;
  opacity: 0.85;
}

.chatbot-quick-actions {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background: #fff;
  border-top: 1px solid #eee;
}

.chatbot-quick-actions button {
  border: 0;
  background: #efe4f6;
  color: #5b3c6e;
  padding: 8px 10px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.82rem;
}

.chatbot-quick-actions button:hover {
  background: #e3d0f0;
}

.chatbot-input-area {
  display: flex;
  gap: 8px;
  padding: 10px;
  border-top: 1px solid #eee;
  background: #fff;
}

.chatbot-input-area input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 999px;
  padding: 10px 12px;
  outline: none;
}

.chatbot-input-area button {
  border: 0;
  background: #9b6bb3;
  color: #fff;
  border-radius: 999px;
  padding: 10px 14px;
  cursor: pointer;
}

.chatbot-input-area button:hover {
  background: #8a5ea0;
}

.chatbot-header button:focus-visible,
.chatbot-quick-actions button:focus-visible,
.chatbot-input-area button:focus-visible,
.chatbot-input-area input:focus-visible {
  outline: 2px solid #4f2d64;
  outline-offset: 2px;
}

@media (max-width: 480px) {
  .chatbot-avatar {
    width: 112px;
    height: 112px;
    right: 12px;
    bottom: 12px;
  }

  .chatbot-avatar.is-docked {
    right: 8px;
    bottom: calc(124px + min(520px, calc(100vh - 120px)) - 56px);
  }

  .chatbot-panel {
    width: min(320px, calc(100vw - 16px));
    height: min(520px, calc(100vh - 120px));
    right: 8px;
    bottom: 124px;
  }
}
</style>
