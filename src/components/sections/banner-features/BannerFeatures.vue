<script setup lang="ts">
import { Container, IconText } from "@ui";
import hands from "@/assets/images/hands.png";
import robot from "@/assets/images/robot.png";
import steps from "@/assets/images/steps.png";
</script>

<template>
  <div class="banner-features">
    <Container>
      <IconText :image="steps" text="Grande capacidade <br> de produção" />
      <IconText :image="robot" text="Máquinario <br> Atualizado" />
      <IconText :image="hands" text="Comprometimento <br> Pós-entrega" />
    </Container>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
