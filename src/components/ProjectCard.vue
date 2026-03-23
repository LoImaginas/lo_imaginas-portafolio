<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  repoUrl: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="panel project-card">
    <img :src="image" :alt="`Captura de ${title}`" />
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a class="btn-secondary" :href="repoUrl" target="_blank" rel="noreferrer">Ver en GitHub</a>
    </div>
  </article>
</template>
