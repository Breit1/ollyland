<template>
  <div class="service-detail-page">
    <div class="breadcrumbs">
      <NuxtLink to="/">Главная</NuxtLink>
      /
      <NuxtLink to="/services">Услуги</NuxtLink>
      /
      <span style="padding: 0 0 0 12px">{{ service.title }}</span>
    </div>
    <div class="service-header">
      <h1 class="service-title">{{ service.titlePost || service.title }}</h1>
      <div class="service-description" v-html="service.description"></div>
    </div>

    <img :src="service.image" :alt="service.titlePost" class="service-main-image" />

    <div class="service-content">
      <h2 class="section-title">{{ service.whyTitle }}</h2>
      <div class="section-description" v-html="service.whyDescription"></div>
    </div>


    <div style="display: flex; width: 100%; justify-content: center; margin-top: 36px">
      <FaqBlock :items="service.includedItems" :title="service.includedTitle" style="flex: 0 0 940px; padding: 0 140px 0 0" />
      <img :src="service.includedImage" style="width: 460px; height: 609px; background: #D9D9D9; flex-shrink: 0;">
    </div>
    <CTA></CTA>
  </div>

</template>

<script setup>
import FaqBlock from "~/components/FaqBlock.vue";
import CTA from "~/components/sections/CTA.vue";

const route = useRoute()

// Parse the service data from query parameters
const service = JSON.parse(route.query.service || 'null')

if (!service) {
  // Redirect to services page or show error if service not found
  navigateTo('/services')
}
</script>

<style scoped>
.service-detail-page {
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;
}

.breadcrumbs {
  margin-bottom: 20px;
  font-family: Mulish, sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #506C46;
}

.breadcrumbs a {
  color: #727070;
  text-decoration: none;
  padding: 0 12px;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.service-header {
  margin-bottom: 40px;
}

.service-title {
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 24px;
  color: #000;
  text-transform: uppercase;

}

.service-description {
  font-family: Mulish, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #000;
}

.service-main-image {
  display: block;
  margin: 0 auto;
  width: 940px;
  height: 528px;
  object-fit: cover;
  margin-bottom: 40px;
}

.service-content {

}

.section-title {
  font-family: Mulish, sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 24px;
  color: #000;
}

.section-description {
  font-family: Mulish, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #000;
}
</style>