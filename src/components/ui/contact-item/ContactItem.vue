<script setup lang="ts">
import { Icon } from "@ui";

interface ContacItemProps {
  icon: string;
  label: string;
  brand?: boolean;
  type?: "solid" | "regular";
}

defineProps<ContacItemProps>();
</script>

<template>
  <div class="contact-item">
    <Icon :name="icon" :brand="brand" :type="type" />
    <span class="contact-item-label" v-text="label" />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
