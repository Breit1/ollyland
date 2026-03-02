<template>
  <div>
    <Header />
    <Hero />
    <About />
    <img class="img-between" src="/img/img-between.svg">
    <Services />
    <InfiniteGallery
        :top-images="topImages"
        :bottom-images="bottomImages"
        class="images"
    />
    <WhyTrust/>
    <InfiniteGallery
        :top-images="topImages"
        class="images-mobile"
    />
    <FAQ />
    <CTA />
    <Footer />
  </div>
</template>

<style scoped>

.img-between{
  width: 100%;
}

.images-mobile{
  display: none;
}

@media (max-width: 768px) {
  .img-between {
    width: 100%;
    height: 126px;
    object-fit: cover;
    object-position: 90% 70%;
  }

  .images-mobile{
    display: block;
    background: #506C46;
  }

  .images{
    display: none;
  }
}

</style>

<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Services from '../components/sections/Services.vue'
import CTA from '../components/sections/CTA.vue'
import FAQ from '../components/sections/FAQ.vue'
import InfiniteGallery from '../components/sections/InfiniteGallery.vue'
import WhyTrust from "../components/sections/WhyTrust.vue";

const topImages = [
  '/img/gallery/top1.jpg',
  '/img/gallery/top2.jpg',
  '/img/gallery/top3.jpg',
  '/img/gallery/top4.jpg',
  '/img/gallery/top5.jpg'
]

const bottomImages = [
  '/img/gallery/bottom1.jpg',
  '/img/gallery/bottom2.jpg',
  '/img/gallery/bottom3.jpg',
  '/img/gallery/bottom4.jpg'
]
</script>