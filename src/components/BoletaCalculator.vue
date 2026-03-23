<script setup>
import { computed, ref } from 'vue'

const honorarios = ref(500000)
const tasaRetencion = 0.145

const retencion = computed(() => honorarios.value * tasaRetencion)
const liquido = computed(() => honorarios.value - retencion.value)

const formatCLP = (amount) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount)
</script>

<template>
  <section class="panel tool-card">
    <h3>Calculadora de Boleta</h3>
    <p>Simula tu boleta de honorarios con retención referencial del 14,5%.</p>

    <label for="monto">Monto bruto</label>
    <input id="monto" v-model.number="honorarios" type="number" min="0" step="1000" />

    <ul class="tool-results">
      <li>Bruto: <strong>{{ formatCLP(honorarios) }}</strong></li>
      <li>Retención: <strong>{{ formatCLP(retencion) }}</strong></li>
      <li>Líquido: <strong>{{ formatCLP(liquido) }}</strong></li>
    </ul>
  </section>
</template>
