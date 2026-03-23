<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="panel card-skill">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>
