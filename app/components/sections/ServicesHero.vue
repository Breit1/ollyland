<template>
  <section id="hero" class="hero">
    <img class="img-back-mobile" src="/img/up_background-mobile.svg" alt="OllyLand Logo" />
    <h1 class="hero__title">
      УСЛУГИ <br class="mobile-br"> ЛАНДШАФТНОГО ДИЗАЙНА
    </h1>
    <div class="hero__description">OllyLand оказывает услуги от разработки концепции
      и детального проекта до его реализации и поддержания, в том числе ухода за садом.</div>
  </section>
</template>

<script setup lang="ts">
// Пока скрипта не нужно
</script>
<style scoped>
.hero {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  background: none;
  align-items: start;
  padding: 110px;
}

.hero__logo img {
  width: 1040px;
  margin-bottom: 20px;
}

.hero__description{
  max-width: 700px;
  font-size: 24px;
}
.hero__title {

  font-size: 40px;

  text-align: left;
  padding: 20px 0;
  font-weight: 700;
  color: #000000;


}

.hero__button {
  background-color: #F7F7F7;
  font-size: 15px;
  margin-top: 0;
  width: 610px;

  border: black 2px solid;
  color: #000000;
  cursor: pointer;
  transition: 0.3s;
  padding: 16px 52px 16px 52px;
  gap: 10px;
}
.hero__button:hover {
  background: #506C46;
  color: #fff;
  border-color: #506C46;
}

.img-back-mobile{
  width: 30%;
  display: block;
  position: absolute;
  right: 0;
  top: -35px;
}

.mobile-br {

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
    top: 0px;
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