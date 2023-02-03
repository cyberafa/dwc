<script setup lang="ts">
interface IconTextProps {
  image: string;
  text: string;
}

defineProps<IconTextProps>();
</script>

<template>
  <div class="icon-text">
    <img :src="image" alt="" class="icon-text-image" />
    <span class="icon-text-text" v-html="text" />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
