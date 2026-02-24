<template>
  <div>
    <Header />
    <Hero />
    <About />
    <img src="/img/img-between.svg">
    <Services />
    <CTA />
    <FAQ />
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
</script>