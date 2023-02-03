<script setup lang="ts">
import {
  ContactGroup,
  Header,
  Footer,
  BannerFeatures,
  BannerCarousel,
} from "@sections";
</script>

<template>
  <ContactGroup />
  <Header />
  <BannerCarousel />
  <BannerFeatures />
  <main id="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
