<script setup lang="ts">
import { ref, type Ref } from "vue";

interface CategoryType {
  name: string;
  showSubcategories: boolean;
  subCategories: any;
}

const categories: Ref<Array<CategoryType>> = ref([
  {
    name: "Categoria (1)",
    showSubcategories: false,
    subCategories: [
      {
        name: "Sub-Categoria (1)",
      },
      {
        name: "Sub-Categoria (2)",
      },
    ],
  },
  {
    name: "Categoria (2)",
    showSubcategories: false,
    subCategories: [
      {
        name: "Sub-Categoria (1)",
      },
      {
        name: "Sub-Categoria (2)",
      },
    ],
  },
  {
    name: "Categoria (3)",
    showSubcategories: false,
    subCategories: [
      {
        name: "Sub-Categoria (1)",
      },
      {
        name: "Sub-Categoria (2)",
      },
    ],
  },
  {
    name: "Categoria (4)",
    showSubcategories: false,
    subCategories: [
      {
        name: "Sub-Categoria (1)",
      },
      {
        name: "Sub-Categoria (2)",
      },
    ],
  },
]);

const emit = defineEmits(["categorySelected", "subCategorySelected"]);

function categorySelected(category: CategoryType) {
  category.showSubcategories = !category.showSubcategories;
  emit("categorySelected", category.name);
}

function subCategorySelected(sub: CategoryType) {
  sub.showSubcategories = !sub.showSubcategories;
  emit("subCategorySelected", sub.name);
}
</script>

<template>
  <ul class="categories">
    <li
      v-for="category in categories"
      :key="category.name"
      class="category-item"
    >
      <span class="category-item-name item" @click="categorySelected(category)">
        {{ category.name }}
      </span>

      <ul v-show="category.showSubcategories" class="sub-category-list">
        <li
          v-for="sub in category.subCategories"
          :key="sub.name"
          class="sub-category-item item"
          @click="subCategorySelected(sub)"
          v-text="`- ${sub.name}`"
        />
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
@import "./style.scss";
</style>
