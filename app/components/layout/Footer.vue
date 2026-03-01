<script setup lang="ts">
</script>
<template>
  <footer class="footer">

    <!-- Лого во всю ширину -->
    <div class="footer__top-logo">
      <img src="/img/logo.svg" alt="OllyLand" />
    </div>

    <div class="footer__container">

      <!-- Колонки -->
      <div class="footer__columns">

        <!-- Колонка 1 -->
        <div class="footer__col">
          <h3>Услуги</h3>
          <ul>
            <li>Проектирование</li>
            <li>Ландшафтные работы</li>
            <li>Сервисное обслуживание</li>
          </ul>
        </div>

        <!-- Колонка 2 -->
        <div class="footer__col">
          <h3>Компания</h3>
          <ul>
            <li>Услуги</li>
            <li>О нас</li>
            <li>Связаться</li>
          </ul>
        </div>

        <!-- Колонка 3 -->
        <div class="footer__col">
          <h3>Контакты</h3>
          <ul>
            <li>+7 (926) 132-09-34</li>
            <li>info@ollyland.ru</li>
            <li>Telegram</li>
          </ul>
        </div>

      </div>

    </div>
    <!-- Линия -->
    <div class="footer__line"></div>

    <!-- Нижняя часть -->
    <div class="footer__bottom">
      <div class="footer__bottom-left">
        <!-- SVG можно красить через CSS -->
        <img class="footer__logo-black" src="/img/logo.svg" alt="OllyLand" />
        <p>
          © 2026 OllyLand. Все права защищены. Политика конфиденциальности.
<!--          <span class="footer__policy">Политика конфиденциальности.</span>-->
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #506C46;
  color: #000000;
}

/* Верхнее лого */
.footer__top-logo {
  width: 100%;
  filter: invert(100%) sepia(0%) saturate(263%) hue-rotate(71deg) brightness(109%) contrast(94%);

}

.footer__top-logo img {
  width: 100%;
  display: block;
  top: -10px;
  position: relative;
}

/* Контейнер */
.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 40px;
}

/* Колонки */
.footer__columns {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.footer__col h3 {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  margin-bottom: 20px;
}

.footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__col li {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 48px;
  cursor: pointer;
  transition: 0.3s;
}

.footer__col li:hover {
  opacity: 0.7;
}

/* Линия */
.footer__line {
  margin: 60px 0 40px;
  height: 1px;
  width: 100%;
  background: #000000;
}

/* Нижняя часть */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 47px 110px;
}

.footer__bottom-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Черный логотип */
.footer__logo-black {
  width: 256px;
}

/* Текст */
.footer__bottom p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}

.footer__policy {
  text-decoration: underline;
  cursor: pointer;
}
</style>