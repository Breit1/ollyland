<template>
  <div class="service-item">

    <div class="service-item__content">
      <div class="service-item__header">
        <h3>{{ title }}</h3>
        <img :src="arrow" alt="" class="service-arrow" />
      </div>

      <div class="service-item__line"></div>

      <p class="service-item__text">
        {{ description }}
      </p>
    </div>

    <div class="service-item__image">
      <img :src="image" alt="" v-if="image" />
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  arrow: {
    type: String,
    default: '/img/arrow3.svg'
  }
})
</script>

<style scoped>
.service-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 0;
}

.service-item__content {
  max-width: 650px;
}

.service-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-item__header h3 {
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
}

.service-arrow {
  width: 24px;
  height: 24px;
}

.service-item__line {
  width: 100%;
  height: 2px;
  background: #000;
  margin: 16px 0 24px;
}

.service-item__text {
  font-family: Mulish, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.service-item__image {
  max-height: 304px;
}

.service-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>