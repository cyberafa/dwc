<script setup lang="ts">
import { Container } from "@ui";
import tecnology from "@/assets/images/technology.png";
</script>

<template>
  <section class="tech">
    <Container
      text-image
      :image="tecnology"
      title="Tecnologias <br> <b>em destaque.</b>"
      text="Texto de preenchimento. Pequeno parágrafo falando sobre alguma tecnologia ou produto recente que esteja em alta no mercado e mereça devida atenção."
      :to="{ name: 'products' }"
      label="Clique e saiba mais"
      primary
      outlined
      black
    />
  </section>
</template>

<style lang="scss">
@import "./style.scss";
</style>
