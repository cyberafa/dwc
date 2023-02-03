<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Categories, ProductOrdering } from "@sections";
import { Container } from "@ui";

const category: Ref<string> = ref("");
const subCategory: Ref<string> = ref("");

function categorySelected(e: string) {
  category.value = e;
}

function subCategorySelected(e: string) {
  subCategory.value = e;
}
</script>

<template>
  <div id="products">
    <Container>
      <Categories
        @category-selected="categorySelected"
        @sub-category-selected="subCategorySelected"
      />
      <ProductOrdering :category="category" :sub-category="subCategory" />
    </Container>
  </div>
</template>

<style lang="scss">
@import "@pages/products.scss";
</style>
