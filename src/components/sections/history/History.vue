<script setup lang="ts">
import { Container } from "@ui";
import image from "@/assets/images/headquarters.jpg";
</script>

<template>
  <section class="history">
    <Container
      text-image
      :image="image"
      title="Conheça<br><b>nossa história.</b>"
      text="Esta é uma loja de demonstração de da Dooca Commerce, que tem como objetivo demonstrar a visualização final de sua loja. Todos os produtos, preços e informações são meramente ilustrativos."
      :to="{ name: 'about' }"
      label="Clique e saiba mais sobre a DWC"
      :outlined="true"
    />
  </section>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
