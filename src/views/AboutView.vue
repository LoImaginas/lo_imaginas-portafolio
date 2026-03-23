<template>
  <section class="about">
    <div class="container">

      <h1>Sobre mí</h1>

      <div class="about-content">

        <!-- Texto -->
        <div class="about-text">
          <p>
            Soy <strong>Lolett Llanquinao</strong>, conocida como <strong>Lo Imaginas</strong>.
            Ingeniera en Administración de Empresas y desarrolladora en formación.
          </p>

          <p>
            Me especializo en combinar tecnología con conocimientos en gestión,
            contabilidad y recursos humanos, para crear soluciones útiles y cercanas
            para pymes y emprendedores.
          </p>

          <p>
            Creo en una tecnología con propósito: simple, accesible y pensada
            para personas reales.
          </p>

          <p>
            Además de lo profesional, soy una persona que valora la libertad,
            la naturaleza y el movimiento… porque también creo que las mejores ideas
            nacen cuando nos sentimos libres.
          </p>
        </div>

        <!-- Imagen -->
        <div class="about-image">
          <img src="../assets/img/en_patines.jpeg" alt="Lo en patines" />
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 80px 20px;
  background: #ffffff;
}

.container {
  max-width: 1100px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #3b2b45;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  min-width: 280px;
  color: #555;
  line-height: 1.6;
}

.about-image {
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
}
</style>
