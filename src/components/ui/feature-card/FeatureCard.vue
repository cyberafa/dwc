<script setup lang="ts">
import { Button } from "@ui";

interface FeatureCardProps {
  image: string;
  label: string;
  text: string;
}

defineProps<FeatureCardProps>();
</script>

<template>
  <div class="feature-card">
    <div class="feature-card-image">
      <img :src="image" alt="" />
      <span v-text="label" />
    </div>
    <p v-text="text" />
    <Button :to="{ name: 'home' }" label="Saiba mais" primary />
  </div>
</template>

<style setup lang="scss">
@import "./style.scss";
</style>
