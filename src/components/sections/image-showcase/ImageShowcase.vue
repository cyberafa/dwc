<script setup lang="ts">
import showcase1 from "@/assets/images/showcase-1.jpg";
import showcase2 from "@/assets/images/showcase-2.jpg";
import showcase3 from "@/assets/images/showcase-3.jpg";
import showcase4 from "@/assets/images/showcase-4.jpg";
const items = [showcase1, showcase2, showcase3, showcase4];
</script>

<template>
  <section class="image-showcase">
    <img v-for="banner in items" :src="banner" class="image-showcase-image" />
  </section>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
