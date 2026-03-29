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
  min-width: 450px;
  max-height: 304px;
  overflow: hidden; /* Важно: скрываем всё, что выходит за пределы */
}

.service-item__image img {
  object-fit: cover ; /* Обрезает лишнее, сохраняя пропорции */
  object-position: right center ; /* Прижимает к правому краю */
}

@media (max-width: 1250px) {
  .service-item__header h3 {
    font-size: 26px;
    line-height: 34px;
  }

  .service-item__text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (max-width: 940px) {
  .service-item {
    display: block;
  }

  .service-item__image {
    min-width: auto;
    max-height: none;
  }

  .service-item__image img {
    padding: 20px 0 0 0;
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }

  .service-item__content {
    max-width: 100%;
  }
  .service-item__line {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    margin-right: 0;
    margin-top: 16px;
    margin-bottom: 24px;
  }

}

</style>