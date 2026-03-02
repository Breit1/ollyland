<template>
  <section id="hero" class="hero">
    <div class="hero__logo">
      <img src="/img/logo.svg" alt="OllyLand Logo" />
    </div>
    <img class="img-back-mobile" src="/img/up_background-mobile.svg" alt="OllyLand Logo" />
    <h1 class="hero__title">
      Бюро ландшафтного дизайна <br class="mobile-br"> Ольги Яковлевой
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
  border: black 2px solid;
  color: #000000;
  cursor: pointer;
  transition: 0.3s;
  padding: 16px 52px 16px 52px;
  gap: 10px;
  margin-top: 50px;
}
.hero__button:hover {
  background: #506C46;
  color: #fff;
  border-color: #506C46;
}

.img-back-mobile{
  display: none;
}

.mobile-br {
  display: none;
}

@media (max-width: 768px) {
  .hero{
    height: auto;
    background: none;
    align-items: start;
  }

  .img-back-mobile{
    display: block;
    position: absolute;
    right: 0;
    top: 50px;
  }
  .hero__logo img{
    display: none;

  }
  .hero__title {
    font-size: 28px;
    line-height: 35px;
    text-align: left;
    padding: 20px 0;
  }
  .hero__button {
    font-size: 15px;
    margin-top: 0;
  width: 267px;

  }

  .mobile-br {
    display: block;
  }
}
</style>