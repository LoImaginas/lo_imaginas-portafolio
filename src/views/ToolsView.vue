<script setup>
import { ref, computed } from 'vue'

const monto = ref(0)

const year = new Date().getFullYear()

const porcentaje = computed(() => {
  if (year >= 2027) return 0.16
  return 0.1525 // 2026
})

const retencion = computed(() => monto.value > 0 ? monto.value * porcentaje.value : 0)
const total = computed(() => monto.value > 0 ? monto.value - retencion.value : 0)

// 📅 FECHA ACTUAL
const today = new Date()
const currentMonth = today.getMonth()
const currentYear = today.getFullYear()

// Generar días del mes
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

// Feriados simples
const feriados = [1, 21] // ejemplo: día 1 y 21 del mes
</script>

<template>
  <section class="tools">
    <div class="container">

      <h1>Herramientas útiles</h1>

      <!-- 💰 CALCULADORA -->
      <div class="tool-box">
        <h2>Calculadora Boleta de Honorarios</h2>

        <input
          type="number"
          v-model="monto"
          placeholder="Ingresa monto bruto"
        />

        <p>
          Retención ({{ (porcentaje * 100).toFixed(2) }}%):
          ${{ retencion.toFixed(0) }}
        </p>

        <p>
          Total a recibir: ${{ total.toFixed(0) }}
        </p>
      </div>
      <p style="font-size: 0.8rem; color: gray;">
         *Este cálculo es referencial según normativa vigente en Chile.
      </p>
      <!-- 🔗 LINKS -->
      <div class="tool-box">
        <h2>Accesos rápidos</h2>
        <ul>
          <li><a href="https://www.sii.cl" target="_blank">Ir al SII</a></li>
        </ul>
      </div>
      <div class="tool-box">
        <h2>Asesoría personalizada</h2>
        <p>
          Si necesitas orientación para iniciar o formalizar tu emprendimiento,
          puedes completar este formulario y así revisaré tu caso de forma más personalizada.
        </p>

        <a
          href="https://forms.gle/DMbBLFS95o6jUMuP6"
          target="_blank"
          rel="noreferrer"
          class="form-link-btn"
        >
          Solicitar asesoría
        </a>
      </div>
      <!-- 📅 CALENDARIO -->
      <div class="tool-box">
        <h2>Calendario del mes</h2>

        <div class="calendar">
          <div
            v-for="day in days"
            :key="day"
            class="day"
            :class="{
              today: day === today.getDate(),
              holiday: feriados.includes(day)
            }"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.tools {
  padding: 60px 20px;
}

.container {
  max-width: 800px;
  margin: auto;
}

.tool-box {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 15px;
}

.day {
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  background: #f3f3f3;
  font-size: 0.9rem;
}

/* Hoy */
.today {
  background: #9b6bb3;
  color: #fff;
  font-weight: 700;
}

/* Feriados */
.holiday {
  background: #ffe4e6;
  color: #b91c1c;
}
.form-link-btn {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  background: #9b6bb3;
  color: white;
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.3s ease;
}

.form-link-btn:hover {
  background: #7e4f98;
}
</style>
