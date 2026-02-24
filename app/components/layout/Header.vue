<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="header-left">
      <img src="/img/logo.svg" alt="OllyLand Logo" class="logo" />
    </div>

    <nav class="header-center">
      <div
          class="nav-item"
      >
        <a href="#" :class="{'nav-link': !isOpen, 'nav-item-click': isOpen}" v-on:click="isOpen = !isOpen">
          Главная
          <img class="arrow-down" src="/img/arrow-up.svg" />
        </a>

        <div class="dropdown" v-if="isOpen">
          <a href="#" class="dropdown-item">ПРОЕКТИРОВАНИЕ</a>
          <a href="#" class="dropdown-item">ЛАНДШАФТНЫЕ РАБОТЫ</a>
          <a href="#" class="dropdown-item">СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</a>
        </div>
      </div>

      <a href="#" class="nav-link">Услуги</a>
      <a href="#" class="nav-link">О нас</a>
    </nav>

    <div class="header-right">
      <div class="phone">+7 (926) 132-09-34</div>
      <a href="https://t.me/yourtelegram" target="_blank">
        <img src="/img/telegram-icon.svg" alt="Telegram" class="telegram-icon" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  width: 100%;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  top: 0;
  background: #f7f7f7;
}

.header-left .logo {
  height: 38px;
}

.nav-link {
  text-decoration: none;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  transition: color 0.2s;

}

.nav-link:hover {
  color: #506C46; /* любой эффект при наведении */
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.phone {
  font-weight: 400;
  font-size: 24px;
}

.telegram-icon {
  width: 32px;
  height: 32px;
}

/* Когда начинаем скроллить */
.header-scrolled {
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.arrow-down {
  rotate: 90deg;


}

.header-center {
  display: flex;
  gap: 60px;
  align-items: center;
}

.nav-item {
  position: relative;
}

/* Ссылка + стрелка */
.nav-link {
  display: flex;
  align-items: center; /* выравнивание по вертикали */
  gap: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  color: #333;
  transition: color 0.2s;
}

.arrow-down {
  width: 20px;
  height: 20px;
  display: inline-block; /* обязательно */
  transform: rotate(180deg);
  transition: transform 0.3s ease;
  margin-top: 3px;
}

/* Поворот стрелки при открытии */
.nav-item-click .arrow-down {
  transform: rotate(0deg);
}

.nav-item-click{
  display: flex;
  align-items: center; /* ВАЖНО — выравнивание по центру */
  gap: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  color: #506C46;
  transition: 0.2s;
}

/* DROPDOWN */
.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  background: white;
  min-width: 260px;
  padding: 15px 0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: fadeIn 0.2s ease;
}

.dropdown-item {
  padding: 12px 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: 0.2s;
}

.dropdown-item:hover {
  background: #f5f5f5;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>