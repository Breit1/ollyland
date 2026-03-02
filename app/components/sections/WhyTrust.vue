<template>
  <section id="why-trust" class="why-trust">
    <!-- Декоративные картинки -->
    <img class="why-trust__decor why-trust__decor--top" src="/img/decor-top.svg" alt="" />
    <img class="why-trust__decor why-trust__decor--bottom" src="/img/decor-bottom.svg" alt="" />

    <div class="why-trust__container">
      <h2 class="why-trust__title">
        Почему нам доверяют наши клиенты и партнеры?
      </h2>

      <div class="why-trust__items">
        <div class="why-trust__item" v-for="(item, index) in items" :key="index">
          <img :src="item.img" alt="" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { img: '/img/item/1.svg', text: 'Соблюдаем сроки' },
  { img: '/img/item/2.svg', text: 'Обсудим ваши условия' },
  { img: '/img/item/3.svg', text: 'Мелочи - без оплаты' },
  { img: '/img/item/4.svg', text: 'Консультируем клиентов' }
]
</script>

<style scoped>
.why-trust {
  position: relative;
  background: #506C46;
  padding: 120px 0;
  overflow: hidden;
  color: #F7F7F7;
}

/* Контейнер */
.why-trust__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Заголовок */
.why-trust__title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 100px;
}

/* Блоки */
.why-trust__items {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.why-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px; /* расстояние между картинкой и текстом */
  text-align: center;
}

.why-trust__item p {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #F7F7F7;
  margin: 0;
}

/* Декоративные изображения */
.why-trust__decor {
  position: absolute;
  z-index: 0;
}

.why-trust__decor--top {
  width: 40%;
  bottom: 150px;
  right: 0;
}

.why-trust__decor--bottom {
  top: 420px;
  left: 0;
}

@media (max-width: 768px) {
  .why-trust {
    padding: 20px 0;
  }

  .why-trust__title{
    font-size: 24px;
    line-height: 36px;
  }

  .why-trust__decor{
    display: none;
  }

  .why-trust__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 24px;
  }

  .why-trust__item img{
    width: 116px;
    height: 116px;

  }

  .why-trust__item{
    gap: 10px;
  }

  .why-trust__item p{
    font-size: 15px;
    line-height: 20px;
  }
}
</style>