<script setup>
const avatarUrl = new URL('../assets/img/avatar-1.png', import.meta.url).href
</script>

<template>
  <section class="hero">
    <div class="hero-container">

      <!-- Avatar -->
      <div class="hero-avatar">
        <img :src="avatarUrl" alt="Avatar ilustrado" />
      </div>

      <!-- Texto -->
      <div class="hero-text">
        <h1>Lo Imaginas</h1>

        <h2>Tecnología con propósito</h2>

        <p>
          Asesorías para pymes, soluciones digitales e ideas con proyección.
        </p>

        <!-- Botones -->
        <div class="hero-buttons">
          <RouterLink to="/proyectos" class="btn primary">
            Ver proyectos
          </RouterLink>

          <RouterLink to="/herramientas" class="btn secondary">
            Herramientas útiles
          </RouterLink>

          <RouterLink to="/contacto" class="btn outline">
            Contacto
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #f3e8ff,
    #ede9fe,
    #fdf2f8
  );

  padding: 40px 20px;
}

.hero-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.hero-avatar img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.hero-text {
  text-align: center;
  max-width: 500px;
}

.hero-text h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #3b2b45;
}

.hero-text h2 {
  font-size: 1.6rem;
  margin: 10px 0;
  color: #9b6bb3;
}

.hero-text p {
  margin: 15px 0 25px;
  color: #555;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Botón principal */
.primary {
  background: #9b6bb3;
  color: white;
}

.primary:hover {
  background: #7e4f98;
}

/* Botón secundario */
.secondary {
  background: #e9d5ff;
  color: #5b3c6e;
}

.secondary:hover {
  background: #d8b4fe;
}

/* Botón outline */
.outline {
  border: 1px solid #9b6bb3;
  color: #9b6bb3;
}

.outline:hover {
  background: #9b6bb3;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-text h2 {
    font-size: 1.3rem;
  }
}
</style>
