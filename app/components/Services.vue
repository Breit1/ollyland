<template>
  <section class="services">
    <h2>УСЛУГИ</h2>

    <ServiceCard
        title="Проектирование"
        text="Наши эксперты по ландшафтному дизайну..."
    />

    <ServiceCard
        title="Ландшафтные работы"
        text="После утверждения проекта..."
    />

    <ServiceCard
        title="Сервисное обслуживание"
        text="Для того чтобы ваш сад..."
    />
  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'
</script>