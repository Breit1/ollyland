<template>
  <section class="services">
    <div class="container">
      <h2>УСЛУГИ</h2>

      <ServiceCard
          title="Проектирование"
          text="Наши эксперты по ландшафтному дизайну создают уникальные проекты..."
      />

      <ServiceCard
          title="Ландшафтные работы"
          text="После утверждения проекта мы переходим к его реализации..."
      />

      <ServiceCard
          title="Сервисное обслуживание"
          text="Мы предлагаем услуги сервисного обслуживания..."
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '../ui/ServiceCard.vue'
</script>