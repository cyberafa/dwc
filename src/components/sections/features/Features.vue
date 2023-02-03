<script setup lang="ts">
import { Container, FeatureCard } from "@ui";
import feature1 from "@/assets/images/feature-1.jpg";
import feature2 from "@/assets/images/feature-2.jpg";
import feature3 from "@/assets/images/feature-3.jpg";
</script>

<template>
  <section class="features">
    <Container>
      <FeatureCard
        :image="feature1"
        label="Matrizes para Sapato"
        text="Equipamentos de alta precisão."
      />
      <FeatureCard
        :image="feature2"
        label="Equipamento de Ponta"
        text="Maquinário com tecnologia de ponta."
      />
      <FeatureCard
        :image="feature3"
        label="Equipe especializada"
        text="Capacidade para grande produção."
      />
    </Container>
  </section>
</template>

<style lang="scss">
@import "./style.scss";
</style>
