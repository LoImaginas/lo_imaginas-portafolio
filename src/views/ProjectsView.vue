<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'OnlyFlans',
    description:
      'Proyecto Full Stack desarrollado con Django, enfocado en estructura web, contenido dinámico y organización de una aplicación funcional.',
    technologies: ['Django', 'Python', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/LoImaginas/OnlyFlans',
    image: new URL('../assets/img/OnlyFlans.png', import.meta.url).href
  },
  {
    title: 'Viajes Chile',
    description:
      'Sitio web responsive desarrollado con HTML, CSS y JavaScript, enfocado en diseño visual, estructura clara y experiencia de usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    repoUrl: 'https://github.com/LoImaginas/Prueba-Viajes-Chile',
    image: new URL('../assets/img/ViajesChile.png', import.meta.url).href
  },
  {
    title: 'Coffee & Muffin',
    description:
      'Proyecto web desarrollado con enfoque en presentación visual, estructura clara y una experiencia amigable para el usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/LoImaginas/Coffe-Muffins',
    image: new URL('../assets/img/coffe&muffin.png', import.meta.url).href
  },
  {
    title: 'ConectaFácil',
    description:
      'Proyecto desarrollado como parte del módulo 3, orientado a reforzar estructura, navegación y lógica aplicada en desarrollo web.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/LoImaginas/Evaluacion_Modulo3',
    image: new URL('../assets/img/conectafacil.png', import.meta.url).href
  }
]
</script>

<template>
  <section class="projects">
    <div class="container">
      <h1>Proyectos</h1>
      <p class="projects-intro">
        Aquí presento algunos de los proyectos que mejor representan mi proceso de aprendizaje,
        mi crecimiento en desarrollo web y mi interés por crear soluciones útiles y cercanas.
      </p>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :repo-url="project.repoUrl"
          :image="project.image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 80px 20px;
  background: linear-gradient(180deg, #fff, #faf7ff);
}

.container {
  max-width: 1200px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #3b2b45;
  margin-bottom: 14px;
}

.projects-intro {
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
  color: #555;
  line-height: 1.7;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
