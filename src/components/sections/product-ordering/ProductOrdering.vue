<script setup lang="ts">
import { ProductList } from "@sections";

interface ProductOrderingProps {
  category: string;
  subCategory: string;
}

const props = defineProps<ProductOrderingProps>();
</script>

<template>
  <div class="product-ordering">
    <header class="product-ordering-header">
      <div class="product-ordering-category">
        {{ category }} <span v-show="subCategory">/</span> {{ subCategory }}
      </div>
      <div class="product-ordering-filter">
        <label for="filter">Organizar por</label>
        <select name="filter">
          <option value="Selecione" selected disabled>Selecione</option>
        </select>
      </div>
    </header>
    <ProductList :category="category" :sub-category="subCategory" />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
