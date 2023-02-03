<script setup lang="ts">
import { computed } from "vue";

interface IconProps {
  name: string;
  brand?: boolean;
  type?: "solid" | "regular";
}

const props = withDefaults(defineProps<IconProps>(), {
  type: "solid",
});

const iconClass = computed<string>(() => {
  let icon = "icon";
  if (props.brand) {
    return `${icon} fa-brands fa-${props.name}`;
  } else return `${icon} fa-${props.type} fa-${props.name}`;
});
</script>

<template>
  <i :class="iconClass" />
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");
</style>
