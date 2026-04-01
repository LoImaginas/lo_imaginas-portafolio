<script setup>
import { reactive, ref } from 'vue'

const sent = ref(false)

const form = reactive({
  nombre: '',
  correo: '',
  mensaje: ''
})

const handleSubmit = () => {
  sent.value = true
  form.nombre = ''
  form.correo = ''
  form.mensaje = ''

  setTimeout(() => {
    sent.value = false
  }, 3500)
}

const channels = [
  {
    name: 'Email',
    value: 'mllanquinaop@correo.uss.cl',
    href: 'mailto:mllanquinaop@correo.uss.cl',
    icon: '✉'
  },
  {
    name: 'LinkedIn',
    value: '/in/lolett',
    href: 'https://www.linkedin.com/in/lolett',
    icon: 'in'
  },
  {
    name: 'GitHub',
    value: '@LoImaginas',
    href: 'https://github.com/LoImaginas',
    icon: 'GH'
  },
  {
    name: 'Instagram',
    value: '@asesorias_loimaginas',
    href: 'https://www.instagram.com/asesorias_loimaginas',
    icon: 'IG'
  },
  {
    name: 'YouTube',
    value: '@LoImaginas',
    href: 'https://www.youtube.com/@LoImaginas',
    icon: '▶'
  },
  {
    name: 'Linktree',
    value: 'asesorias_loimaginas',
    href: 'https://linktr.ee/asesorias_loimaginas',
    icon: 'LT'
  }
]
</script>

<template>
  <section class="contact-view">
    <header class="contact-header">
      <h1>Contacto</h1>
      <p>Te respondo por el canal que prefieras o puedes dejar tu consulta aquí.</p>
    </header>

    <div class="contact-layout">
      <article class="panel contact-channels">
        <h2>Canales directos</h2>
        <ul class="channel-list">
          <li v-for="channel in channels" :key="channel.name" class="channel-item">
            <span class="channel-icon" aria-hidden="true">{{ channel.icon }}</span>
            <div>
              <p class="channel-name">{{ channel.name }}</p>
              <a :href="channel.href" target="_blank" rel="noreferrer">{{ channel.value }}</a>
            </div>
          </li>
        </ul>
      </article>

      <article class="panel contact-form-card">
        <h2>Formulario de consulta</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <label for="nombre">Nombre</label>
          <input id="nombre" v-model.trim="form.nombre" type="text" required placeholder="Tu nombre" />

          <label for="correo">Correo</label>
          <input id="correo" v-model.trim="form.correo" type="email" required placeholder="tu-correo@ejemplo.com" />

          <label for="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            v-model.trim="form.mensaje"
            rows="5"
            required
            placeholder="Cuéntame brevemente en qué te puedo ayudar."
          />

          <button type="submit">Enviar consulta</button>
          <p v-if="sent" class="success-msg">Gracias, tu consulta fue enviada correctamente.</p>
        </form>
      </article>
    </div>
  </section>
</template>

<style scoped>
.contact-view {
  display: grid;
  gap: 1.1rem;
}

.contact-header h1 {
  margin: 0;
  color: var(--primary);
}

.contact-header p {
  margin: 0.35rem 0 0;
  color: var(--muted);
}

.contact-layout {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1.1fr;
}

.contact-channels h2,
.contact-form-card h2 {
  margin: 0 0 0.85rem;
  color: var(--primary);
  font-size: 1.15rem;
}

.channel-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border: 1px solid #cbb8d5;
  border-radius: 12px;
  padding: 0.65rem;
  background: #fbf8fd;
}

.channel-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #6f4888;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
}

.channel-name {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
}

.channel-item a {
  color: #4f3261;
  font-weight: 700;
}

.contact-form {
  display: grid;
  gap: 0.55rem;
}

.contact-form label {
  font-weight: 700;
  color: #443151;
}

.contact-form input,
.contact-form textarea {
  border: 1px solid #bfa9cd;
  border-radius: 10px;
  padding: 0.65rem;
  font: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid #9e7cb5;
  border-color: #9e7cb5;
}

.contact-form button {
  margin-top: 0.35rem;
  border: 0;
  border-radius: 999px;
  padding: 0.62rem 1rem;
  font-weight: 700;
  color: #fff;
  background: #6f4888;
  cursor: pointer;
}

.contact-form button:hover {
  background: #5f3d75;
}

.success-msg {
  margin: 0.4rem 0 0;
  color: #2e6b4b;
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
