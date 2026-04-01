<script setup>
import { computed, ref } from 'vue'

const monto = ref(0)
const today = new Date()
const currentMonth = today.getMonth()
const currentYear = today.getFullYear()
const monthName = today.toLocaleDateString('es-CL', { month: 'long' })
const monthLabel = `${monthName[0].toUpperCase()}${monthName.slice(1)} ${currentYear}`

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
const feriados = [1, 21]

const porcentaje = computed(() => (currentYear >= 2027 ? 0.16 : 0.1525))
const retencion = computed(() => (monto.value > 0 ? monto.value * porcentaje.value : 0))
const total = computed(() => (monto.value > 0 ? monto.value - retencion.value : 0))

const money = (value) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value || 0)
</script>

<template>
  <section class="tools-page">
    <header class="tools-header">
      <h1>Herramientas útiles</h1>
      <p>Todo en un solo lugar: cálculo de boleta, accesos clave, asesoría y calendario.</p>
    </header>

    <div class="tools-grid">
      <article class="tool-card feature">
        <h2>Calculadora de Boleta</h2>
        <label for="monto">Monto bruto</label>
        <input id="monto" v-model.number="monto" type="number" min="0" step="1000" placeholder="Ej: 650000" />
        <ul class="stats">
          <li>Retención ({{ (porcentaje * 100).toFixed(2) }}%): <strong>{{ money(retencion) }}</strong></li>
          <li>Total a recibir: <strong>{{ money(total) }}</strong></li>
        </ul>
        <small>*Cálculo referencial según normativa vigente en Chile.</small>
      </article>

      <article class="tool-card">
        <h2>Accesos rápidos</h2>
        <ul class="links">
          <li><a href="https://www.sii.cl" target="_blank" rel="noreferrer">Portal SII</a></li>
          <li>
            <a href="https://www.sii.cl/servicios_online/1039-.html" target="_blank" rel="noreferrer">
              Boletas de honorarios
            </a>
          </li>
          <li>
            <a href="https://www.sii.cl/servicios_online/calendario_contribuyente.html" target="_blank" rel="noreferrer">
              Calendario de contribuyentes
            </a>
          </li>
        </ul>
      </article>

      <article class="tool-card">
        <h2>Asesoría personalizada</h2>
        <p>Si necesitas apoyo para formalizar o ordenar tu emprendimiento, revisamos tu caso contigo.</p>
        <a class="cta" href="https://forms.gle/DMbBLFS95o6jUMuP6" target="_blank" rel="noreferrer">Solicitar asesoría</a>
      </article>

      <article class="tool-card">
        <h2>{{ monthLabel }}</h2>
        <div class="calendar">
          <div
            v-for="day in days"
            :key="day"
            class="day"
            :class="{ today: day === today.getDate(), holiday: feriados.includes(day) }"
          >
            {{ day }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.tools-page {
  display: grid;
  gap: 1.2rem;
}

.tools-header h1 {
  margin: 0;
  color: var(--primary);
  font: 800 2rem/1.1 'Manrope', sans-serif;
}

.tools-header p {
  margin: 0.45rem 0 0;
  color: var(--muted);
}

.tools-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(290px, 340px);
  gap: 1rem;
  overflow-x: auto;
  padding: 0.35rem 0.2rem 0.5rem;
  scroll-snap-type: x mandatory;
}

.tool-card {
  scroll-snap-align: start;
  background: #fff;
  border: 2px solid #8d76a1;
  border-radius: 16px;
  box-shadow: 0 14px 28px rgba(49, 34, 61, 0.12);
  padding: 1rem;
  min-height: 255px;
}

.feature {
  border-color: #6f4888;
  box-shadow: 0 16px 30px rgba(71, 44, 92, 0.2);
}

.tool-card h2 {
  margin: 0 0 0.75rem;
  color: #4f3261;
  font-size: 1.15rem;
}

.tool-card p {
  margin: 0;
  color: var(--muted);
}

.tool-card label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.tool-card input {
  width: 100%;
  border: 1px solid #bca7cb;
  border-radius: 10px;
  padding: 0.65rem;
}

.stats,
.links {
  list-style: none;
  margin: 0.85rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.links a {
  color: #4f3261;
  font-weight: 600;
}

.cta {
  margin-top: 1rem;
  display: inline-block;
  background: #6f4888;
  color: #fff;
  border-radius: 999px;
  padding: 0.58rem 1rem;
  font-weight: 700;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.35rem;
}

.day {
  text-align: center;
  border-radius: 8px;
  padding: 0.38rem 0;
  background: #f3edf7;
  font-size: 0.82rem;
}

.today {
  background: #6f4888;
  color: #fff;
  font-weight: 700;
}

.holiday {
  background: #f8e6ed;
  color: #8a3556;
}

.tools-grid::-webkit-scrollbar {
  height: 10px;
}

.tools-grid::-webkit-scrollbar-thumb {
  background: #b89bc9;
  border-radius: 999px;
}

@media (max-width: 900px) {
  .tools-grid {
    grid-auto-columns: minmax(260px, 86vw);
  }
}
</style>
