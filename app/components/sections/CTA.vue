<template>
  <section id="contact" class="contact">
    <!-- Декор -->
    <img class="contact__decor contact__decor--right" src="/img/contact-right.svg" alt="" />
    <img class="contact__decor contact__decor--top" src="/img/contact-top.svg" alt="" />

    <div class="contact__container">

      <!-- Левая часть -->
      <div class="contact__left">
        <div class="mobile-h2">ОСТАЛИСЬ ВОПРОСЫ?</div>
        <h2>
          Оставьте заявку, <br class="mobile-br"/>и мы свяжемся с вами <br class="mobile-br" /> для обсуждения проекта
        </h2>
      </div>

      <!-- Правая часть -->
      <div class="contact__right">
        <form @submit.prevent="submitForm">

          <!-- Имя -->
          <div class="contact__field">
            <input
                type="text"
                v-model="name"
                placeholder="Ваше имя"
                :class="{ error: errors.name }"
            />
            <div class="contact__line"></div>
          </div>

          <!-- Телефон -->
          <div class="contact__field">
            <input
                type="tel"
                v-model="phone"
                placeholder="Контактный телефон"
                @input="handlePhoneInput"
                :class="{ error: errors.phone }"
            />
            <div class="contact__line"></div>
          </div>

          <button type="submit" class="contact__btn">
            Отправить
          </button>

        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const phone = ref('')

const errors = ref({
  name: false,
  phone: false
})

/* ===== Маска телефона ===== */

const handlePhoneInput = (e) => {
  let value = e.target.value.replace(/\D/g, '')

  if (value.startsWith('8')) {
    value = '7' + value.slice(1)
  }

  if (!value.startsWith('7')) {
    value = '7' + value
  }

  value = value.substring(0, 11)

  let formatted = '+7'

  if (value.length > 1) {
    formatted += ' (' + value.substring(1, 4)
  }
  if (value.length >= 4) {
    formatted += ') ' + value.substring(4, 7)
  }
  if (value.length >= 7) {
    formatted += '-' + value.substring(7, 9)
  }
  if (value.length >= 9) {
    formatted += '-' + value.substring(9, 11)
  }

  phone.value = formatted
}

const validatePhone = () => {
  return phone.value.length === 18
}

const submitForm = () => {
  errors.value.name = name.value.trim() === ''
  errors.value.phone = !validatePhone()

  if (!errors.value.name && !errors.value.phone) {
    console.log('Форма отправлена')
  }
}
</script>

<style scoped>
.contact {
  position: relative;
  padding: 170px 0 200px 0;
  overflow: hidden;
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  position: relative;
  z-index: 2;
}

/* ===== Левая часть ===== */

.contact__left {
 width: 100%;
}

.mobile-h2{
  display: none;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  margin: 0;
}

.contact__left h2 {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  margin: 0;
}

/* ===== Правая часть ===== */

.contact__right {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ===== Поля ===== */

.contact__field {
  display: flex;
  flex-direction: column;
}

input {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  border: none;
  outline: none;
  background: transparent;
  color: #000;
}

input::placeholder {
  color: #727070;
}

.contact__line {
  height: 1px;
  width: 100%;
  background: #000;
  margin-top: 8px;
  transition: 0.3s;
}

/* ===== Ошибка ===== */

input.error {
  color: #BD1B1B;
}

input.error::placeholder {
  color: #BD1B1B;
}

input.error + .contact__line {
  background: #BD1B1B;
}

/* ===== Кнопка ===== */

.contact__btn {
    margin-top: auto;
    padding: 16px 52px;
    border: 2px solid #000;
    background: transparent;
    cursor: pointer;
    align-self: flex-start;
    font-weight: 500;
    font-size: 20px;
  transition: 0.3s;
}

.contact__btn:hover {
  background: #506C46;
  color: #fff;
  border-color: #506C46;
}


/* ===== Декоративные картинки ===== */

.contact__decor {
  position: absolute;
  z-index: 1;
}

.contact__decor--right {
  right: 0;
  bottom: 0;
}

.contact__decor--top {
  right: 280px;
  top: 0;
}

@media (max-width: 768px) {

  .contact {
    padding: 20px 20px 48px 20px;
  }

  .contact__decor{
    display: none;

  }

  .mobile-h2{
    display: block;

  }

  .contact__container{
    display: block;
  }

  .contact__left h2 {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin: 16px 0;
  }

  .mobile-br{
    display: none;
  }

  input {
    font-size: 15px;
  }

  .contact__btn{
    width: 100%;
  }
}
</style>