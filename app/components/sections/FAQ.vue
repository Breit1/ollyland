<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(0)

const questions = [
  {
    title: 'Как рассчитать стоимость проекта ландшафтного дизайна?',
    text: 'Для расчета стоимости проекта необходимо учесть площадь участка...'
  },
  {
    title: 'Сколько времени нужно на создание проекта?',
    text: 'В среднем проект занимает от 2 до 4 недель...'
  }
]

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq">
    <div class="container">
      <h2>Часто задаваемые вопросы</h2>

      <div
          v-for="(q, index) in questions"
          :key="index"
          class="faq-item"
      >
        <div class="faq-title" @click="toggle(index)">
          {{ q.title }}
        </div>

        <div v-if="openIndex === index" class="faq-text">
          {{ q.text }}
        </div>
      </div>
    </div>
  </section>
</template>