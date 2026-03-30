<template>
  <NuxtLink :to="{ path: `/services/${service.id}`, query: { service: JSON.stringify(service) } }" class="service-card">
    <div class="service-card__header">
      <img :src="service.imagePage"/>
      <div style="display:flex; align-items: center; justify-content: space-between; width: 100%; padding: 30px 0">
        <h3 class="service-card__title">{{ service.title }}</h3>
        <div class="service-item__image">
          <img src="/img/arrow3.svg" alt=""  />
        </div>
      </div>
    </div>
    <div class="service-card__line"></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  }

})
</script>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  width: 372px;
}


.service-item__image{
  display: flex;
  justify-content: end;
  flex-shrink: 0;
}

.service-card__header {
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.service-card__title {
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin: 0;
}

.service-card__arrow {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transform: rotate(90deg);
}

.service-card__line {
  width: 100%;
  height: 1px;
  background: #000;
}
</style>