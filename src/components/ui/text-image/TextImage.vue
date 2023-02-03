<script setup lang="ts">
interface TextImageProps {
  image: string;
  title?: string;
}

defineProps<TextImageProps>();
</script>

<template>
  <div class="text-image">
    <div class="text-image-image">
      <img :src="image" />
    </div>
    <div class="text-image-content">
      <div class="text-image-header">
        <h2 v-if="$slots.title" class="text-image-title">
          <slot name="title" />
        </h2>
        <span v-if="$slots.subtitle" class="text-image-title">
          <slot name="subtitle" />
        </span>
      </div>
      <slot v-if="$slots.default" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
