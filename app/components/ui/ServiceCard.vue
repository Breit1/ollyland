<template>
  <div class="service-card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>