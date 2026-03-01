<template>
  <div>
    <Header />
    <Hero />
    <About />
    <img style="width: 100%" src="/img/img-between.svg">
    <Services />
    <InfiniteGallery
        :top-images="topImages"
        :bottom-images="bottomImages"
    />
    <WhyTrust/>
    <FAQ />
    <CTA />
    <Footer />
  </div>
</template>

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