<template>
  <section class="infinite-gallery">
    <div class="row-wrapper">
      <div
          class="row"
          ref="topRow"
          :style="{ transform: `translateX(${topOffset}px)` }"
      >
        <img
            v-for="(img, index) in duplicatedTop"
            :key="'top' + index"
            :src="img"
        />
      </div>
    </div>
    <div class="row-wrapper" v-if="duplicatedBottom.length" >
      <div
          class="row"
          ref="bottomRow"
          :style="{ transform: `translateX(${bottomOffset}px)` }"
      >
        <img
            v-for="(img, index) in duplicatedBottom"
            :key="'bottom' + index"
            :src="img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import none from "@nuxt/image/runtime/providers/none";

const props = defineProps({
  topImages: {
    type: Array,
    required: true
  },
  bottomImages: {
    type: Array,
    default: () => []
  }
})

const topOffset = ref(0)
const bottomOffset = ref(-3000)

const speed = 0.5

const duplicatedTop = computed(() => [
  ...props.topImages,
  ...props.topImages,
  ...props.topImages
])

const duplicatedBottom = computed(() => [
  ...props.bottomImages,
  ...props.bottomImages,
  ...props.bottomImages
])

let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  const delta = currentScroll - lastScroll

  topOffset.value -= delta * speed
  bottomOffset.value += delta * speed

  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.infinite-gallery {
  overflow: hidden;
  padding: 120px 0;
}

.row-wrapper {
  overflow: hidden;
  width: 100%;
  padding: 10px;
}

.row {
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  white-space: nowrap;
  will-change: transform;
}

.row img {
  width: 320px;
  height: 220px;
  object-fit: cover;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .infinite-gallery {
    padding: 0;
  }
}
</style>