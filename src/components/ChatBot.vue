<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isTyping = ref(false)
const inputMessage = ref('')

const messages = ref([
  {
    sender: 'bot',
    text: 'Hola 💜 soy Lo Bot. Puedo orientarte sobre servicios, contacto, proyectos y herramientas útiles.'
  }
])

const quickOptions = [
  {
    label: 'Servicios',
    response:
      'Brindo asesorías en contabilidad básica, RRHH, formalización y apoyo digital para PYMES.'
  },
  {
    label: 'Proyectos',
    response:
      'Puedes revisar mis proyectos en la sección Proyectos, donde muestro trabajos desarrollados con HTML, CSS, JavaScript y Vue.'
  },
  {
    label: 'Contacto',
    response:
      'Puedes escribirme a mllanquinaop@correo.uss.cl o revisar la sección Contacto del portafolio.'
  },
  {
    label: 'Herramientas útiles',
    response:
      'En este portafolio encontrarás herramientas pensadas para emprendedores, como calculadora de boletas y accesos útiles.'
  }
]

const botReply = (text) => {
  isTyping.value = true

  setTimeout(() => {
    messages.value.push({
      sender: 'bot',
      text
    })
    isTyping.value = false
  }, 1200)
}

const handleQuickOption = (option) => {
  messages.value.push({
    sender: 'user',
    text: option.label
  })

  botReply(option.response)
}

const sendMessage = () => {
  const userText = inputMessage.value.trim()
  if (!userText) return

  messages.value.push({
    sender: 'user',
    text: userText
  })

  const lower = userText.toLowerCase()

  let response = 'Aún estoy aprendiendo 😊. Por ahora puedo orientarte sobre servicios, proyectos, contacto y herramientas útiles.'

  if (lower.includes('servicio') || lower.includes('asesoría')) {
    response =
      'Ofrezco apoyo en contabilidad básica, RRHH, formalización y acompañamiento para PYMES.'
  } else if (lower.includes('precio') || lower.includes('valor') || lower.includes('costo')) {
    response =
      'Los precios dependen del tipo de trabajo o asesoría. Puedes escribirme y te ayudo a revisar tu caso.'
  } else if (lower.includes('contacto') || lower.includes('correo') || lower.includes('email')) {
    response =
      'Puedes contactarme en mllanquinaop@correo.uss.cl o desde la sección Contacto del portafolio.'
  } else if (lower.includes('github')) {
    response =
      'Puedes revisar mis proyectos y repositorios en mi perfil de GitHub: https://github.com/LoImaginas'
  } else if (lower.includes('proyecto')) {
    response =
      'En la sección Proyectos encontrarás ejemplos de trabajos que he desarrollado y publicado.'
  } else if (lower.includes('herramienta') || lower.includes('boleta') || lower.includes('sii')) {
    response =
      'En la sección Herramientas útiles encontrarás recursos pensados para personas que necesitan apoyo práctico y simple.'
  }

  inputMessage.value = ''
  botReply(response)
}
</script>

<template>
  <div class="chatbot-wrap">
    <button
      class="chatbot-avatar"
      type="button"
      @click="isOpen = !isOpen"
      aria-label="Abrir chatbot"
    >
      <img src="/patita.webp" alt="Abrir chatbot" />
    </button>

    <section v-if="isOpen" class="chatbot-panel">
      <header class="chatbot-header">
        <div>
          <h3>Lo Bot</h3>
          <small>En línea</small>
        </div>
        <button type="button" @click="isOpen = false">✕</button>
      </header>

      <div class="chatbot-body">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message-row"
          :class="msg.sender === 'user' ? 'user-row' : 'bot-row'"
        >
          <div
            class="message-bubble"
            :class="msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'"
          >
            {{ msg.text }}
          </div>
        </div>

        <div v-if="isTyping" class="message-row bot-row">
          <div class="message-bubble bot-bubble typing">
            Lo Bot está escribiendo...
          </div>
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
        <input
          v-model="inputMessage"
          type="text"
          placeholder="Escribe tu mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.chatbot-wrap {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1200;
}

.chatbot-avatar {
  width: 68px;
  height: 68px;
  border: none;
  border-radius: 50%;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.chatbot-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.chatbot-panel {
  width: 330px;
  height: 520px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

.chatbot-header {
  background: #9b6bb3;
  color: white;
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
  border: none;
  background: transparent;
  color: white;
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
  color: white;
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
  border: none;
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
  border: none;
  background: #9b6bb3;
  color: white;
  border-radius: 999px;
  padding: 10px 14px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .chatbot-panel {
    width: 300px;
    height: 480px;
  }
}
</style>
