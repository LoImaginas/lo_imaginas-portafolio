<script setup>
import { ref } from 'vue'

const logoUrl = new URL('../assets/img/logo-lo_imaginas.png', import.meta.url).href
const isOpen = ref(false)

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Herramientas', to: '/herramientas' },
  { label: 'Contacto', to: '/contacto' }
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="navbar-wrap">
    <nav class="navbar container">
      <RouterLink class="brand" to="/" @click="closeMenu">
        <img :src="logoUrl" alt="Logo principal" />
      </RouterLink>

      <button class="nav-toggle" type="button" @click="isOpen = !isOpen" aria-label="Abrir menú">
        {{ isOpen ? 'Cerrar' : 'Menú' }}
      </button>

      <ul class="nav-links" :class="{ open: isOpen }">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" @click="closeMenu">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
