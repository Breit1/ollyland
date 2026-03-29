<template>
  <section id="about" class="about">
    <img src="/img/right-background.svg" class="about__bg" alt="" />

    <div class="container about__wrapper">

      <!-- Левая колонка -->
      <div class="about__left">
        <div class="about__title-block-phone">
          <h2>О НАС</h2>
        </div>
        <div class="about__photo"></div>

        <div class="about__author">
          <h3>ОЛЬГА ЯКОВЛЕВА</h3>
          <p>ОСНОВАТЕЛЬНИЦА ОЛЛИЛЭНД</p>
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

<!--        <button class="about__btn">Подробнее</button>-->
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


@media (max-width: 1590px) {

  .about {
    position: relative;
    padding: 60px 0;
    overflow: hidden;
  }

  .about__bg {
    width: 300px;
    height: 660px;
  }


}


.about__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
}

.about__left {
  width: 496px;
}

.about__photo {
  width: 496px;
  height: 575px;
  background: #ddd; /* временная заглушка */
}

@media (max-width: 1395px) {

  .about__left{
    width: 430px;
  }

  .about__photo {
    width: 430px;
    height: 499px;
  }

}

@media (max-width: 1460px) {

  .about__left{
    width: 430px;
  }

  .about__photo {
    width: 430px;
    height: 499px;
  }

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
  width: 560px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 5%;
}

.about__title-block {
  align-items: center;

}

.about__subtitle-wrapper {
  margin-top: 20px;
}

.about__subtitle-wrapper .line {
  width: 510px;
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

.about__title-block-phone h2 {
  display: none;
  margin: 0;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  padding-bottom: 10px;
}


.about__subtitle {
  margin-top: 20px;
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
  white-space: pre;
}

.about__description {
  margin-top: 24px;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  line-height: 26px;
}

@media (max-width: 1395px) {

  .about__right{
    width: 450px;
  }

  .about__title-block h2{
    font-size: 36px;
  }

  .about__subtitle{
    font-size: 28px;
  }

  .about__subtitle-wrapper .line {
    width: 396px;

  }

  .about__left{
    width: 366px;
  }

  .about__photo{

    height: 425px;
    width: 366px;
  }


}

@media (max-width: 1210px) {

  .about__bg{
    display: none;
  }
}

@media (max-width: 1210px) {

  .about__bg{
    display: none;
  }

}

@media (max-width: 1100px) {
  .about__wrapper{
    padding: 0 32px;
  }

}



.about__btn {
  margin-top: auto;
  padding: 16px 52px;
  border: 2px solid #000;
  background: transparent;
  cursor: pointer;
  align-self: flex-start;
  font-weight: 500;
  font-size: 20px;
  transition: all 0.3s;
}

.about__btn:hover {
  background: #506C46;
  color: #fff;
  border-color: #506C46;
}

@media (max-width: 860px) {

  .about {
    padding: 60px 0 15px 0;
  }

  .about__wrapper {
    display: block;
  }

  .about__bg{
    display: none;
  }

  .about__left{
    width: 100%;
  }

  .about__photo{
    width: 100%;
  }

  .about__title-block-phone h2 {
    display: block;
  }

  .about__title-block h2 {
    display: none;

  }

  .about__subtitle{
    font-size: 24px;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    margin-right: 0;
  }

  .about__right {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .about__subtitle-wrapper .line {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    margin-right: 0;
  }

  .about__subtitle{
    text-align: center;
  }
}

@media (max-width: 350px) {
  .about__subtitle {
    font-size: 20px;
  }
}
</style>