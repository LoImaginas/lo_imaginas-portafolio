<script setup>
const links = [
  { label: 'Portal principal SII', url: 'https://www.sii.cl/' },
  { label: 'Boletas de honorarios', url: 'https://www.sii.cl/servicios_online/1039-.html' },
  { label: 'Calendario de contribuyentes', url: 'https://www.sii.cl/servicios_online/calendario_contribuyente.html' }
]
</script>

<template>
  <section class="panel tool-card">
    <h3>Enlaces rápidos SII</h3>
    <ul class="link-list">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url" target="_blank" rel="noreferrer">{{ link.label }}</a>
      </li>
    </ul>
  </section>
</template>
