<script setup lang="ts">
import { ProductItem } from "@ui";
import tecnology from "@/assets/images/technology.png";

interface ProductListProps {
  category: string;
  subCategory: string;
}

defineProps<ProductListProps>();

const products = [
  {
    name: "Nome do produto",
    image: tecnology,
    type: "Tipo do produto",
    description: "Descrição e aplicação",
  },
  {
    name: "Nome do produto",
    image: tecnology,
    type: "Tipo do produto",
    description: "Descrição e aplicação",
  },
];
</script>

<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.name"
      :name="product.name"
      :image="product.image"
      :type="product.type"
      :description="product.description"
    />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
