<template>
  <section class="faq">
    <div class="faq__container">
      <h2 class="faq__title">
        Часто задаваемые вопросы
      </h2>

      <div class="faq__list">
        <div
            class="faq__item"
            v-for="(item, index) in items"
            :key="index"
        >
          <div class="faq__line"></div>

          <div
              class="faq__question"
              @click="toggle(index)"
          >
            <h3>{{ item.question }}</h3>

            <img
                class="faq__arrow"
                :class="{ active: activeIndex === index }"
                src="/img/arrow-up.svg"
                alt=""
            />
          </div>

          <transition name="faq">
            <p
                v-if="activeIndex === index"
                class="faq__answer"
            >
              {{ item.answer }}
            </p>
          </transition>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value =
      activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq {
  padding: 120px 0;
}

.faq__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Заголовок */
.faq__title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 40px;
}

/* Линия */
.faq__line {
  width: 100%;
  height: 1px;
  background: #000;
}

/* Список */
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Вопрос */
.faq__question {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq__question h3 {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
}

/* Стрелка */
.faq__arrow {
  transition: transform 0.3s ease;
  rotate: 90deg;
}

.faq__arrow.active {
  transform: rotate(180deg);
}

/* Ответ */
.faq__answer {
  margin-top: 24px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

/* Анимация */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>