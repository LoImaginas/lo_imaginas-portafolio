<script setup>
import BoletaCalculator from '../components/BoletaCalculator.vue'
import SiiLinks from '../components/SiiLinks.vue'
import HolidayCalendar from '../components/HolidayCalendar.vue'
</script>

<template>
  <section>
    <h1 class="section-title">Herramientas</h1>
    <div class="cards-grid three-cols">
      <BoletaCalculator />
      <SiiLinks />
      <HolidayCalendar />
    </div>
  </section>
</template>
