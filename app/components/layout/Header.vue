<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="burger">
      <img src="/img/burger.svg" alt="Menu" />
    </div>
    <div class="header-left">
      <NuxtLink to="/">
        <img src="/img/logo.svg" alt="OllyLand Logo" class="logo" />
      </NuxtLink>
    </div>
    <nav class="header-center">
      <div class="nav-item">
        <div class="nav-link nav-services">
          Услуги
          <img class="arrow-down" src="/img/arrow-up.svg" />
        </div>

        <div class="dropdown">
          <a href="#" class="dropdown-item">
            ПРОЕКТИРОВАНИЕ
            <img class="arrow-right" src="/img/arrow-up.svg" />
          </a>
          <a href="#" class="dropdown-item">
            ЛАНДШАФТНЫЕ РАБОТЫ
            <img class="arrow-right" src="/img/arrow-up.svg" />
          </a>
          <a href="#" class="dropdown-item">
            СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
            <img class="arrow-right" src="/img/arrow-up.svg" />
          </a>
        </div>
      </div>

      <NuxtLink to="#hero" class="nav-link">Главная</NuxtLink>
      <NuxtLink to="#about" class="nav-link">О нас</NuxtLink>
    </nav>

    <div class="header-right">
      <a href="tel:+79261320934" class="phone">
        <span class="phone-text">+7 (926) 132-09-34</span>
        <img src="/img/phone.svg" alt="Call" class="phone-icon" />
      </a>

      <a class="telega" href="https://t.me/yourtelegram" target="_blank">
        <img src="/img/telegram-icon.svg" alt="Telegram" class="telegram-icon" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

  isScrolled.value = scrollTop > 10
  console.log(isScrolled.value)
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

.header-center {
  display: flex;
  gap: 60px;
  align-items: center;
}

.nav-item {
  position: relative;
}

/* NAV LINK */
.nav-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  color: #333;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #506C46;
}

/* PHONE */
.phone {
  font-weight: 400;
  font-size: 24px;
  text-decoration: none;
  color: #000;
  transition: 0.2s;
}

.phone:hover {
  color: #506C46;
}

/* RIGHT BLOCK */
.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.telegram-icon {
  width: 32px;
  height: 32px;
}
.telegram-icon:hover {
  filter: invert(40%) sepia(10%) saturate(1416%) hue-rotate(59deg) brightness(92%) contrast(87%);
}

/* SCROLL EFFECT */
.header-scrolled {
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

/* ARROWS */
.arrow-right {
  margin-left: 20px;
}

.arrow-down {
  width: 20px;
  height: 20px;
  display: inline-block;
  rotate: 90deg;
  transition: transform 0.3s ease;
  margin-top: 3px;

}

/* DROPDOWN */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #f7f7f7;
  min-width: 462px;
  padding: 15px 0;
  box-shadow: -9px 13px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  gap: 5px;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.2s ease;
}

.dropdown-item {
  padding: 12px 20px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: #333;
  transition: 0.2s;
}

.dropdown-item:hover {
  background: #f5f5f5;
}

/* HOVER LOGIC */
.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-item:hover .arrow-down {
  transform: rotate(180deg);
  filter: invert(40%) sepia(10%) saturate(1416%) hue-rotate(59deg) brightness(92%) contrast(87%);
}

.nav-item:hover .nav-services {
  color: #506C46;
}

.burger {
  display: none;
}

.phone-icon{
  display: none;
}


@media (max-width: 768px) {
  .logo{
    width: 169px;
  }

  .header {
    padding: 20px 15px 20px 15px;
  }

  /* Центрируем лого */
  .header-left {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Скрываем десктопное меню */
  .header-center {
    display: none;
  }

  .phone-text {
    display: none;
  }

  /* Показываем только иконку */
  .phone-icon {
    width: 36px;
    height: 36px;
    display: block;
  }


  .telega{
    display: none;
  }

  /* Бургер */
  .burger {
    display: block;
  }

  .burger img {
    width: 28px;
    height: 28px;
  }

  /* Убираем лишние отступы справа */
  .header-right {
    gap: 15px;
  }
}
</style>