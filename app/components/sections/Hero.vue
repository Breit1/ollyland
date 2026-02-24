<template>
  <section class="hero">
    <div class="hero__logo">
      <img src="/img/logo.svg" alt="OllyLand Logo" />
    </div>
    <h1 class="hero__title">
      Бюро ландшафтного дизайна Ольги Яковлевой
    </h1>
    <button class="hero__button">Обсудить проект</button>
  </section>
</template>

<script setup lang="ts">
// Пока скрипта не нужно
</script>
<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 936px; /* высота фона */
  background: url("/img/up_background.svg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero__logo img {
  width: 1040px;
  margin-bottom: 20px;
}

.hero__title {
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #000000;
}

.hero__button {
  background-color: #F7F7F7;
  font-size: 18px;
  border: black 1px solid;
  color: #000000;
  cursor: pointer;
  transition: 0.3s;
  padding: 16px 52px 16px 52px;
  gap: 10px;
  margin-top: 50px;
}

.hero__button:hover {

}
</style>