<script setup lang="ts">
import { computed } from "vue";

interface LinkProps {
  to?: object;
  href?: string;
  label?: string;
}

const props = defineProps<LinkProps>();

const linkComponent = computed<string>(() => {
  if (props.to) {
    return "RouterLink";
  } else return "a";
});
</script>

<template>
  <component
    :is="linkComponent"
    :to="to"
    :href="href"
    :target="href ? '_blank' : null"
    class="link"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<style lang="scss">
@import "./style.scss";
</style>
