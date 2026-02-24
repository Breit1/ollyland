<template>
  <section class="about">
    <img src="/img/right-background.svg" class="about__bg" alt="" />

    <div class="container about__wrapper">

      <!-- Левая колонка -->
      <div class="about__left">
        <div class="about__photo"></div>

        <div class="about__author">
          <h3>ОЛЬГА ЯКОВЛЕВА</h3>
          <p>Основательница ОллиЛэнд</p>
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="about__right">
        <div class="about__title-block">
          <h2>О НАС</h2>
        </div>

        <div class="about__subtitle-wrapper">
          <div class="line"></div>
          <h4 class="about__subtitle">
            Мы создаем ландшафтный дизайн с душой
          </h4>
          <div class="line"></div>
        </div>

        <p class="about__description">
          Добро пожаловать в ландшафтное бюро ОллиЛэнд! Наша команда профессионалов
          создает уникальные и гармоничные природные пространства, превращая каждый
          участок в оазис красоты и уюта.
          <br /><br />
          Бюро основано Ольгой Яковлевой, талантливым ландшафтным дизайнером.
          Она вдохновляется природой и стремится к индивидуальному подходу
          в каждом проекте, учитывая пожелания клиентов и особенности окружающей среды.
        </p>

        <button class="about__btn">Подробнее</button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.about__bg {
  position: absolute;
  right: 0;
  top: 0;
  width: 434px;
  height: 960px;
  object-fit: cover;
  z-index: 0;
}

.about__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.about__left {
  width: 496px;
}

.about__photo {
  width: 496px;
  height: 575px;
  background: #ddd; /* временная заглушка */
}

.about__author {
  margin-top: 20px;
}

.about__author h3,
.about__author p {
  font-family: Mulish, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}

.about__author p {
  margin-top: 4px;
}

.about__right {
  max-width: 600px;
}

.about__title-block {
  align-items: center;

}

.about__subtitle-wrapper {
  margin-top: 20px;
}

.about__subtitle-wrapper .line {
  width: 100%;
  height: 1px;
  background: #000;
}

.about__subtitle {
  margin: 16px 0;
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
}

.about__title-block h2 {
  margin: 0;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 48px;
}

.about__subtitle {
  margin-top: 20px;
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
}

.about__description {
  margin-top: 24px;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  line-height: 26px;
}

.about__btn {
  margin-top: 32px;
  padding: 12px 32px;
  border: 1px solid #000;
  background: transparent;
  cursor: pointer;
}
</style>