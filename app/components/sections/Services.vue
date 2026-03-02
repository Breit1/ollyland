<template>
  <section id="services" class="services">
    <div class="container">

      <h2 class="services__title">УСЛУГИ</h2>

      <ServiceItem
          title="Проектирование"
          description="Наши эксперты по ландшафтному дизайну создают уникальные проекты, учитывающие ваши пожелания и особенности участка. Мы предлагаем комплексный подход, начиная с анализа территории и заканчивая разработкой детализированных планов. Каждое наше решение направлено на то, чтобы подчеркнуть красоту природы и создать гармоничное пространство для отдыха и вдохновения."
          image="/img/service1.svg"
      />
      <ServiceItem
          title="Ландшафтные работы"
          description="После утверждения проекта мы переходим к его реализации. Наша команда профессионалов выполняет все виды ландшафтных работ: от посадки растений до укладки дорожек и создания водоемов. Мы используем только высококачественные материалы и современные технологии, чтобы гарантировать долговечность и эстетическую привлекательность каждого элемента."
          image="/img/service2.svg"
      />
      <ServiceItem
          title="Сервисное обслуживание"
          description="Для того чтобы ваш сад или парк всегда оставался в идеальном состоянии, мы предлагаем услуги сервисного обслуживания. Это включает регулярный уход за растениями, обрезку, подкормку и другие мероприятия, направленные на поддержание здоровья и красоты вашего зеленого пространства. Мы заботимся о каждом проекте даже после его завершения, чтобы вы могли наслаждаться природой без лишних забот."
          image="/img/service3.svg"
      />
      <button class="about__btn">Подробнее</button>
    </div>
  </section>
</template>

<script setup>
import ServiceItem from '@/components/ServiceItem.vue'
</script>

<style scoped>
.services {
  padding: 120px 0;
}

.services__title {
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 60px;
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

@media (max-width: 768px) {
  .services__title{
    font-size: 28px;
  }

  .services__title {
    margin-bottom: 0;
  }

  .services {
    padding: 42px 0;
  }

  .about__btn{
    width: 100%;
  }
}
</style>