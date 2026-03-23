<script setup>
const feriados = [
  { fecha: '01 Ene', nombre: 'Año Nuevo' },
  { fecha: '18 Sep', nombre: 'Independencia Nacional' },
  { fecha: '19 Sep', nombre: 'Glorias del Ejército' },
  { fecha: '25 Dic', nombre: 'Navidad' }
]
</script>

<template>
  <section class="panel tool-card">
    <h3>Feriados clave en Chile</h3>
    <ul class="holiday-list">
      <li v-for="feriado in feriados" :key="feriado.fecha">
        <span>{{ feriado.fecha }}</span>
        <strong>{{ feriado.nombre }}</strong>
      </li>
    </ul>
  </section>
</template>
