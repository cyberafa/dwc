<script setup lang="ts">
import { Button } from "@ui";

interface ProductItemProps {
  image: string;
  name: string;
  type: string;
  description: string;
}

defineProps<ProductItemProps>();
</script>

<template>
  <div class="product-item">
    <img :src="image" class="product-item-image" />
    <div class="product-item-content">
      <div class="product-item-info">
        <h1 class="product-item-name" v-text="name" />
        <span class="product-item-type" v-text="type" />
        <p class="product-item-description" v-text="description" />
      </div>
      <Button label="Saiba mais" primary />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
