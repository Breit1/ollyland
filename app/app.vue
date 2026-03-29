<template>
  <Header></Header>
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
import '../assets/main.css'
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";


</script>

<style>
body {
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
}
</style>